import { Avatar, Box, Card, Link, Typography } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import TicketList from "components/TicketList";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import TicketEditItem from "components/TicketEditItem";

export default function TicketEdit() {
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
          ></Card>
          {/* 리스트로 수정 필요 */}
          <TicketEditItem />
          <TicketEditItem />
        </Box>
      </Box>
    </Box>
  );
}
