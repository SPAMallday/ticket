import { Avatar, Box, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { green } from "@mui/material/colors";
// import ModifyIcon from "assets/img/pencil.png"
import TicketList from "components/ticket/TicketList";

import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export default function Ticket() {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <Stack>
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
                            현재 회원권
                        </Typography>
                        {/* <Avatar alt="Modify ticket" src={ModifyIcon} sx={{width:"1.3rem", height:"1.3rem"}}/> */}
                        <Link
                            onClick={() => {
                                navigate("edit");
                            }}
                        >
                            <Avatar
                                alt='Modify ticket'
                                sx={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    bgcolor: green[500],
                                }}
                            >
                                <EditIcon
                                    sx={{ width: "1.1rem", height: "1.1rem" }}
                                />
                            </Avatar>
                        </Link>
                    </Box>
                    <Box>
                        <TicketList />
                        <Link
                            underline='none'
                            onClick={() => {
                                navigate("all");
                            }}
                        >
                            <Typography
                                fontSize='0.8rem'
                                color='text.secondary'
                                sx={{ textAlign: "right" }}
                            >
                                모두 보기
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                {/* <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        my: 1,
                    }}
                >
                    <Typography variant='h6' fontWeight={400}>
                        정지 내역
                    </Typography>
                    // <Avatar alt="Modify ticket" src={ModifyIcon} sx={{width:"1.3rem", height:"1.3rem"}}/> 
                    <Avatar
                        alt='Modify ticket'
                        sx={{
                            width: "1.5rem",
                            height: "1.5rem",
                            bgcolor: teal[400],
                        }}
                    >
                        <ArrowForwardIosIcon
                            sx={{ width: "1.1rem", height: "1.1rem" }}
                        />
                    </Avatar>
                </Box>

                <Box>
                    <Typography variant='h6'>추천 회원권</Typography>
                </Box> */}
            </Stack>
        </Box>
    );
}
