import { Box, Typography } from "@mui/material";

// TODO 데이터 받아넣기
export default function VistiItem() {
    return (
        <Box mb={1}>
            <Typography sx={{ fontWeight: 600 }}>더클라임 서울대점</Typography>
            <Typography
                sx={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "rgba(0, 0, 0, 0.6)",
                }}
            >
                뉴셋 보라 올클 함~~ 킼
            </Typography>
        </Box>
    );
}
