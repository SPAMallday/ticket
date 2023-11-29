import { Paper, Typography } from "@mui/material";
import VistiItem from "./VisitItem";

interface DateProps {
    focusDate: Date | null;
}

// TODO 데이터 받아넣기
export default function VisitList({ focusDate }: DateProps) {
    return (
        <>
            <Paper
                elevation={1}
                square={false}
                sx={{ padding: 1, border: 1, borderColor: "#a0a096" }}
            >
                <Typography sx={{ color: "#6F48EB", fontWeight: "700", mb: 1 }}>
                    {focusDate?.toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </Typography>
                <VistiItem />
                <VistiItem />
            </Paper>
        </>
    );
}
