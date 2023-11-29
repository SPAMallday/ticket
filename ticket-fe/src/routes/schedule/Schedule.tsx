import { Box, Typography } from "@mui/material";
import CustomCalendar from "components/schedule/CustomCalendar";
import VisitList from "components/schedule/VisitList";
import { MouseEvent, useState } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

//TODO 일정 등록 만들기
export default function Schedule() {
    const [focusDate, setFocusDate] = useState<Date | null>(new Date());
    const handleDateChange = (v: Value, e: MouseEvent<HTMLButtonElement>) => {
        const temp = new Date(v?.toString()!);
        setFocusDate(temp);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Typography variant='h6' fontWeight={700}>
                일정
            </Typography>
            <CustomCalendar
                focusDate={focusDate}
                dateChange={handleDateChange}
            />
            <VisitList focusDate={focusDate} />
        </Box>
    );
}
