import { Card, CardContent, Grid, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import DeleteIcon from "@mui/icons-material/DeleteForever";

const card = <></>;

type ModalProps = {
  open: () => void;
};

export default function TicketEditItem({ open }: ModalProps) {
  const handleOpen = () => open();

  return (
    <Card variant='outlined' sx={{ borderRadius: 3, mb: 0.5 }}>
      <CardContent sx={{ py: "0.5rem!important" }}>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          wrap='nowrap'
          sx={{ overflow: "hidden" }}
        >
          {/* TODO 디자인 수정 및 Modal Open 수정*/}
          <Grid container item direction={"column"} xs={24} wrap='nowrap'>
            <Typography
              sx={{ fontWeight: 700, fontSize: "1.05rem" }}
              component='div'
              noWrap
            >
              3개월권
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }} color='text.secondary'>
              2023.03.01 ~ 2023.06.01
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }} color='text.secondary'>
              정지 횟수 : 1회
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
              <TimerIcon color='error' onClick={handleOpen} />
            </Grid>
            <Grid item display={"flex"} alignItems={"center"}>
              <DeleteIcon />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
