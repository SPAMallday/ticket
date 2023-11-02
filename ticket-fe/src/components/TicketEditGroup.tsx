import { Box, Divider, Typography } from "@mui/material";
import TicketEditItem from "./TicketEditItem";

export default function TicketEditGroup(props: any) {
  return (
    <Box sx={{ my: 1 }}>
      <Typography sx={{ fontWeight: 700, fontSize: "1.05rem" }} component='div'>
        더클라임
      </Typography>
      <Divider sx={{ my: 1 }} />
      <TicketEditItem open={props} />
      <TicketEditItem open={props} />
    </Box>
  );
}
