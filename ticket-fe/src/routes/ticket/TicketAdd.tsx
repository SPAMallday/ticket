import {
  Autocomplete,
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

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
  const handleGymChange = (s: GymOptionType | null) => {
    setGym(s);
  };

  const [ticketType, setTicketType] = useState("period");
  const handleTicketTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketType(e.target.value);
  };

  const [month, setMonth] = useState<number | string>("");
  const handleMonthChange = (event: SelectChangeEvent<typeof month>) => {
    setMonth(Number(event.target.value) || "");
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
              value={gym}
              onChange={(event: any, newValue: GymOptionType | null) => {
                handleGymChange(newValue);
              }}
              {...defaultProps}
              id='auto-complete'
              autoHighlight
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
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
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={700}>기간</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
              <Select value={month} onChange={handleMonthChange} displayEmpty>
                <MenuItem value=''>
                  <em>직접 선택</em>
                </MenuItem>
                <MenuItem value={1}>1개월</MenuItem>
                <MenuItem value={2}>2개월</MenuItem>
                <MenuItem value={3}>3개월</MenuItem>
                <MenuItem value={6}>6개월</MenuItem>
                <MenuItem value={12}>12개월</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
  { name: "더 클라임 서울대", id: 1 },
  { name: "더 클라임 강남", id: 2 },
  { name: "더 클라임 신림", id: 3 },
  { name: "더 클라임 양재", id: 4 },
  { name: "더 클라임 연남", id: 5 },
  { name: "더 클라임 홍대 B", id: 6 },
  { name: "더 클라임 사당", id: 7 },
  { name: "더 클라임 신사", id: 8 },
  { name: "더 클라임 일산", id: 9 },
  { name: "더 클라임 마곡", id: 10 },
  { name: "더 플라스틱 클라이밍 염창", id: 11 },
  { name: "더 플라스틱 클라이밍 문래", id: 12 },
  { name: "알레 클라이밍 혜화", id: 13 },
  { name: "알레 클라이밍 영등포", id: 14 },
  { name: "알레 클라이밍 강동", id: 15 },
  { name: "서울숲 클라이밍 뚝섬", id: 16 },
  { name: "서울숲 클라이밍 영등포", id: 17 },
  { name: "서울숲 클라이밍 잠실", id: 18 },
  { name: "서울숲 클라이밍 구로", id: 19 },
  { name: "클라이밍 파크 종로", id: 19 },
  { name: "클라이밍 파크 한티", id: 20 },
  { name: "클라이밍 파크 신논현", id: 21 },
  { name: "클라이밍 파크 성수", id: 22 },
  { name: "손상원 클라이밍짐 잠실", id: 23 },
  { name: "손상원 클라이밍짐 강남", id: 24 },
  { name: "직접 입력", id: 0o0 },
];
