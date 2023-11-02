import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import TicketEditGroup from "components/TicketEditGroup";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TicketEdit() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              sx={{ width: "1.5rem", height: "1.5rem", bgcolor: red[500] }}
            >
              <ReplyIcon sx={{ width: "1.1rem", height: "1.1rem" }} />
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
            <CardContent sx={{ py: "0.5rem!important", textAlign: "center" }}>
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
          <TicketEditGroup />
          <TicketEditGroup />
        </Box>

        {/* TODO Modal 내용 props로 연결 */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant='h6' component='h2'>
              회원권 정지
            </Typography>
            <Typography sx={{ mt: 2 }}>현재 정지 횟수</Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
