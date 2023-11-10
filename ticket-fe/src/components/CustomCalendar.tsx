import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { koKR } from "@mui/x-date-pickers";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";

function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
        const timeout = setTimeout(() => {
            const daysInMonth = date.daysInMonth();
            const daysToHighlight = [1, 2, 3].map(() =>
                getRandomNumber(1, daysInMonth)
            );

            resolve({ daysToHighlight });
        }, 500);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException("aborted", "AbortError"));
        };
    });
}

const initialValue = dayjs();

function ServerDay(
    props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth &&
        highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <Badge
            key={props.day.toString()}
            overlap='circular'
            badgeContent={isSelected ? "🌚" : undefined}
        >
            <PickersDay
                {...other}
                outsideCurrentMonth={outsideCurrentMonth}
                day={day}
            />
        </Badge>
    );
}

export default function CustomCalendar() {
    const requestAbortController = useRef<AbortController | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

    const [value, onChange] = useState<Date | null>(new Date());

    const fetchHighlightedDays = (date: Dayjs) => {
        const controller = new AbortController();
        fakeFetch(date, {
            signal: controller.signal,
        })
            .then(({ daysToHighlight }) => {
                setHighlightedDays(daysToHighlight);
                setIsLoading(false);
            })
            .catch((error) => {
                // ignore the error if it's caused by `controller.abort`
                if (error.name !== "AbortError") {
                    throw error;
                }
            });

        requestAbortController.current = controller;
    };

    useEffect(() => {
        fetchHighlightedDays(initialValue);
        // abort request on unmount
        return () => requestAbortController.current?.abort();
    }, []);

    const handleMonthChange = (date: Dayjs) => {
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays(date);
    };

    // TODO React-calendar로 변경?
    return (
        // <LocalizationProvider
        //     dateAdapter={AdapterDayjs}
        //     localeText={
        //         koKR.components.MuiLocalizationProvider.defaultProps.localeText
        //     }
        // >
        //     <DateCalendar
        //         defaultValue={initialValue}
        //         loading={isLoading}
        //         onMonthChange={handleMonthChange}
        //         renderLoading={() => <DayCalendarSkeleton />}
        //         slots={{
        //             day: ServerDay,
        //         }}
        //         slotProps={{
        //             day: {
        //                 highlightedDays,
        //             } as any,
        //         }}
        //         views={["day"]}
        //         sx={{ width: "auto" }}
        //     />
        // </LocalizationProvider>
        <Calendar
            onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
            formatDay={(locale, date) => dayjs(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
            value={value}
            minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
            maxDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
            navigationLabel={null}
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            className='mx-auto w-full text-sm border-b'
            tileContent={({ date, view }) => {
                // 날짜 타일에 컨텐츠 추가하기 (html 태그)
                // 추가할 html 태그를 변수 초기화
                let html = [];
                // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
                if (highlightedDays.find((x) => x === dayjs(date).date())) {
                    html.push(<div className='dot'></div>);
                }
                // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
                return (
                    <>
                        <div className='flex justify-center items-center absoluteDiv'>
                            {html}
                        </div>
                    </>
                );
            }}
        />
    );
}
