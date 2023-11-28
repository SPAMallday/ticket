import dayjs, { Dayjs } from "dayjs";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

// 달력 CSS
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { Box } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

// TODO 실제 데이터 호출 시 변경
function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
        const timeout = setTimeout(() => {
            const daysInMonth = date.daysInMonth();
            const daysToHighlight = [1, 2, 3].map(() =>
                getRandomNumber(1, daysInMonth)
            );

            resolve({ daysToHighlight });
        }, 50);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException("aborted", "AbortError"));
        };
    });
}

const initialValue = dayjs();

export default function CustomCalendar() {
    const requestAbortController = useRef<AbortController | null>(null);
    // const [isLoading, setIsLoading] = useState(false);   로딩 화면 구성 시
    const [highlightedDays, setHighlightedDays] = useState([0]);

    const [focusDate, setFocusDate] = useState<Date | null>(new Date());
    const handleDateChange = (v: Value, e: MouseEvent<HTMLButtonElement>) => {
        const temp = new Date(v?.toString()!);
        setFocusDate(temp);
    };

    useEffect(() => {
        // fetchHighlightedDays(initialValue);
        handleDateWithLoading(initialValue);
        // abort request on unmount
        return () => requestAbortController.current?.abort();
    }, []);

    const fetchHighlightedDays = (date: Dayjs) => {
        const controller = new AbortController();
        fakeFetch(date, {
            signal: controller.signal,
        })
            .then(({ daysToHighlight }) => {
                setHighlightedDays(daysToHighlight);
                // setIsLoading(false);
            })
            .catch((error) => {
                // ignore the error if it's caused by `controller.abort`
                if (error.name !== "AbortError") {
                    throw error;
                }
            });

        requestAbortController.current = controller;
    };

    const handleDateWithLoading = (date: Dayjs) => {
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }

        // setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays(date);
    };

    const assignDays = (date: Date) => {
        // 날짜 타일에 컨텐츠 추가하기 (html 태그)
        // 추가할 html 태그를 변수 초기화
        let html = [];
        // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
        if (highlightedDays.find((x) => x === dayjs(date).date())) {
            html.push(<div className='dot'></div>);
        }
        // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
        return <div className='dotDiv'>{html}</div>;
    };

    const WrapNavNext = (props: any) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <NavigateNext>{props.children}</NavigateNext>
            </Box>
        );
    };

    const WrapNavPrev = (props: any) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <NavigateBefore>{props.children}</NavigateBefore>
            </Box>
        );
    };

    return (
        <Box mt={2} mb={2}>
            <Calendar
                // 달력 기본 설정
                locale='ko-KR'
                calendarType='gregory'
                minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
                maxDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
                next2Label={null} // 1년 후 버튼 숨김
                prev2Label={null} // 1년 전 버튼 숨김
                nextLabel={<WrapNavNext />}
                prevLabel={<WrapNavPrev />}
                showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                formatDay={(locale, date) => dayjs(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
                // 달력 값, 함수 세팅
                value={focusDate}
                onChange={handleDateChange} // useState로 포커스 변경 시 현재 날짜 받아오기
                onActiveStartDateChange={({
                    action,
                    activeStartDate,
                    value,
                    view,
                }) => {
                    handleDateWithLoading(dayjs(activeStartDate));
                }} // 달 변경 시 불러올 데이터 받아오기}
                tileContent={({ date, view }) => assignDays(date)}
            />
        </Box>
    );
}
