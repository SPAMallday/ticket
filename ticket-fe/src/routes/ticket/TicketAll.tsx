import { Avatar, Box, Link, Typography } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import TicketList from "components/ticket/TicketList";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function TicketAll() {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ mb: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1,
                    }}
                >
                    <Typography variant='h6' fontWeight={700}>
                        전체 회원권
                    </Typography>
                    <Link
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Avatar
                            alt='Back to tickets'
                            sx={{
                                width: "1.5rem",
                                height: "1.5rem",
                                bgcolor: red[500],
                            }}
                        >
                            <ReplyIcon
                                sx={{ width: "1.1rem", height: "1.1rem" }}
                            />
                        </Avatar>
                    </Link>
                </Box>
                <Box>
                    <TicketList />
                </Box>
            </Box>
        </Box>
    );
}
