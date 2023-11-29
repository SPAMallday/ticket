import {
    Avatar,
    Box,
    Card,
    CardContent,
    Link,
    Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import TicketEditGroup from "components/ticket/TicketEditGroup";
import { useEffect, useState } from "react";
import TicketStopModal from "components/ticket/TicketStopModal";

interface ModalContent {
    ticketId: number;
    stopCnt: number;
}

export default function TicketEdit() {
    const navigate = useNavigate();

    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    const [open, setOpen] = useState(false);
    const handleOpen = (id: number, count: number) => {
        setModalContent({ ticketId: id, stopCnt: count });
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {}, [modalContent]);

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
                        현재 회원권
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
                    <Card
                        variant='outlined'
                        sx={{ borderStyle: "dashed", borderRadius: 3, mb: 0.5 }}
                        onClick={() => {
                            navigate("add");
                        }}
                    >
                        <CardContent
                            sx={{ py: "0.5rem!important", textAlign: "center" }}
                        >
                            <AddIcon />
                            <Typography
                                sx={{ mt: -1, fontSize: "0.8rem" }}
                                color='text.secondary'
                            >
                                추가
                            </Typography>
                        </CardContent>
                    </Card>

                    <TicketEditGroup open={handleOpen} />
                    <TicketEditGroup open={handleOpen} />
                    <TicketEditGroup open={handleOpen} />
                </Box>

                <TicketStopModal
                    open={open}
                    onClose={handleClose}
                    modalContent={modalContent}
                />
            </Box>
        </Box>
    );
}
