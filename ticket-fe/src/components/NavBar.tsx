import { useEffect, useState } from "react";
import {Box, BottomNavigation, BottomNavigationAction} from "@mui/material";
import {
    LocalActivity as TicketIcon,
    Today as TodayIcon,
    AccountBox as ProfileIcon,
} from "@mui/icons-material";

export default function NavBar() {
  const [value, setValue] = useState<number>(0);

  // 0에서 0을 클릭해도 바뀌는가?
  // TODO navigation 연결
  useEffect(() => {
    if (value == 0) {}
    else if (value == 1) {}
  }, [value]);

  return (
    <Box sx={{ width: "100vw"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="회원권" icon={<TicketIcon />} />
        <BottomNavigationAction label="일정" icon={<TodayIcon />} />
        <BottomNavigationAction label="내 정보" icon={<ProfileIcon />} />
      </BottomNavigation>
    </Box>
  );
}