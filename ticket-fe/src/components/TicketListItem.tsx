import { Card, CardContent, Grid, Typography } from "@mui/material";

const card = (
    <>
      <CardContent sx={{ py:"0.5rem!important" }}>
        <Grid container justifyContent={"space-between"}>
            <Grid>
                <Typography sx={{fontWeight:700, fontSize:"1.05rem"}} component="div">
                더클라임
                </Typography>
            </Grid>
            <Grid>
                <Typography sx={{fontWeight:700, fontSize:"1.05rem"}} component="div">
                기간권
                </Typography>
            </Grid>
        </Grid>
        <Typography sx={{ fontSize:"0.8rem" }} color="text.secondary">
          2023.03.01 ~ 2023.06.01
        </Typography>
        <Typography sx={{ fontSize:"0.8rem" }} color="text.secondary">
          1개월 : 손해 / 3개월 : 손해
        </Typography>
      </CardContent>
    </>
  );

export default function TicketListItem() {
    return (
        <>
            <Card variant="outlined" sx={{backgroundColor:"#EC646480", borderRadius:3, mb:0.5}}>
                {card}
            </Card>
        </>
    );
}