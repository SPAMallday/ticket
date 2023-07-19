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
  width: "90vw",
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
            onClick={
              // TODO 클릭 시 모달 오픈
              handleOpen
            }
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

          <TicketEditGroup />
          <TicketEditGroup />
          <TicketEditGroup />
        </Box>
      </Box>

      {/* 모달 파트 */}
      {/* 등록 모달 */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 1 }}>
            등록
          </Typography>
          <Typography>센터명</Typography>
          <Typography>종류</Typography>
          <Typography>기간</Typography>
          <Typography>시작일</Typography>
          <Typography>일자 지정</Typography>
          <Typography>가격</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
