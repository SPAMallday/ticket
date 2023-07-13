import { Card, CardContent, Grid, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import DeleteIcon from "@mui/icons-material/DeleteForever";

// TODO 프랜차이즈 별로 묶는 디자인으로 변경 필요?
const card = (
  <>
    <CardContent sx={{ py: "0.5rem!important" }}>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap='nowrap'
        sx={{ overflow: "hidden" }}
      >
        <Grid container item direction={"column"} xs={8} wrap='nowrap'>
          <Typography
            sx={{ fontWeight: 700, fontSize: "1.05rem" }}
            component='div'
            noWrap
          >
            더클라임123123123123123 - 3개월권
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }} color='text.secondary'>
            2023.03.01 ~ 2023.06.01
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction={"row"}
          justifyContent={"flex-end"}
          columnSpacing={2}
        >
          <Grid item display={"flex"} alignItems={"center"}>
            <TimerIcon color='error' />
          </Grid>
          <Grid item display={"flex"} alignItems={"center"}>
            <DeleteIcon />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </>
);

export default function TicketEditItem() {
  return (
    <Card variant='outlined' sx={{ borderRadius: 3, mb: 0.5 }}>
      {card}
    </Card>
  );
}
