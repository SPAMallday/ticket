import { useEffect, useState } from "react";
import {Box, BottomNavigation, BottomNavigationAction} from "@mui/material";
import {
    LocalActivity as TicketIcon,
    Today as TodayIcon,
    AccountBox as ProfileIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate('tickets');
    }
    else if (value === 1) {
      navigate('schedule');
    }
    else if (value === 2) {
      navigate('profile');
    }
  }, [value]);

  return (
    <Box sx={{width: "100vw"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ borderTop:1, borderTopColor:"#c1c1c1"}}
      >
        <BottomNavigationAction label="회원권" icon={<TicketIcon />} />
        <BottomNavigationAction label="일정" icon={<TodayIcon />} />
        <BottomNavigationAction label="내 정보" icon={<ProfileIcon />} />
      </BottomNavigation>
    </Box>
  );
}