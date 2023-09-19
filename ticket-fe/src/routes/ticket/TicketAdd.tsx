import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import TicketEditGroup from "components/TicketEditGroup";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

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

export default function TicketAdd() {
  const defaultProps = {
    options: gymList,
    getOptionLabel: (option: GymOptionType) => option.name,
  };

  const [gym, setGym] = useState<GymOptionType | null>(null);
  const handleGymChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setGym(e.target.);
  };

  const [ticketType, setTicketType] = useState("period");
  const handleTicketTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketType(e.target.value);
  };

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
            회원권 등록
          </Typography>
          <Avatar
            alt='Back to tickets'
            sx={{ width: "1.5rem", height: "1.5rem", bgcolor: red[500] }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <CancelIcon sx={{ width: "1.1rem", height: "1.1rem" }} />
          </Avatar>
        </Box>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Box>
            <Typography fontWeight={700} sx={{ mb: 1 }}>
              센터명
            </Typography>
            <Autocomplete
              {...defaultProps}
              id='auto-complete'
              autoHighlight
              renderInput={(params) => (
                <TextField {...params} variant='standard' />
              )}
            />
          </Box>
          <Box>
            <Typography fontWeight={700}>종류</Typography>
            <RadioGroup
              sx={{ justifyContent: "space-between" }}
              row
              value={ticketType}
              onChange={(val) => {
                handleTicketTypeChange(val);
              }}
            >
              <FormControlLabel
                value='period'
                control={<Radio />}
                label='기간권'
              />
              <FormControlLabel
                value='count'
                control={<Radio />}
                label='횟수권'
              />
              <FormControlLabel
                value='crew'
                control={<Radio />}
                label='단체권'
              />
            </RadioGroup>
          </Box>
          <Typography fontWeight={700}>기간</Typography>
          <Typography fontWeight={700}>시작일</Typography>
          <Typography fontWeight={700}>종료일</Typography>
          <Typography fontWeight={700}>가격</Typography>
        </Stack>
      </Box>

      {/* 모달 파트 */}
      {/* 등록 모달 */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 1 }}>
            센터 검색
          </Typography>

          <TextField></TextField>
        </Box>
      </Modal>
    </Box>
  );
}

interface GymOptionType {
  name: string;
  id: number;
}

const gymList = [
  { name: "더 클라임 서울대점", id: 1 },
  { name: "더 클라임 강남점", id: 2 },
  { name: "더 클라임 신림점", id: 3 },
  { name: "더 클라임 양재점", id: 4 },
  { name: "더 클라임 연남점", id: 5 },
  { name: "더 플라스틱 클라이밍 염창", id: 6 },
  { name: "더 플라스틱 클라이밍 문래", id: 7 },
  { name: "직접 입력", id: 0o0 },
];
