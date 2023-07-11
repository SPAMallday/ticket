import { Box, Icon, IconButton, Stack, Typography } from "@mui/material";

export default function Ticket() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack>
                <Box sx={{justifyContent: "space-around"}}>
                    <Typography variant="h6" fontWeight={700}>현재 회원권</Typography>
                    <IconButton ></IconButton>
                </Box>
                <Box><Typography variant="h6">정지 내역</Typography></Box>
                <Box><Typography variant="h6">추천 회원권</Typography></Box>
            </Stack>
        </Box>
    );
}