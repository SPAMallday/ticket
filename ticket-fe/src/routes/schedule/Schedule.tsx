import { Box, Typography } from "@mui/material";
import CustomCalendar from "components/CustomCalendar";

export default function Schedule() {
    return (
        <Box sx={{ width: "100%" }}>
            <Typography variant='h6' fontWeight={700}>
                일정
            </Typography>
            <CustomCalendar />
        </Box>
    );
}
