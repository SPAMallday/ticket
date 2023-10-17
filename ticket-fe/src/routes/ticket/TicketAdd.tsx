import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
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
import { ChangeEvent, useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { koKR } from "@mui/x-date-pickers/locales";
import { Done } from "@mui/icons-material";

export default function TicketAdd() {
  const defaultProps = {
    options: gymList,
    getOptionLabel: (option: GymOptionType) => option.name,
  };

  // state 모음

  // dialog 파트
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [gym, setGym] = useState<GymOptionType | null>(null);
  const handleGymChange = (s: GymOptionType | null) => {
    setGym(s);
  };

  const [ticketType, setTicketType] = useState<string>("period");
  const handleTicketTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketType(e.target.value);
  };

  const [month, setMonth] = useState<number | string>("");
  const handleMonthChange = (event: SelectChangeEvent<typeof month>) => {
    setMonth(Number(event.target.value) || "");
  };

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const handleStartDateChange = (s: Dayjs | null) => {
    // console.log(s?.toDate().toLocaleDateString());
    setStartDate(s);
  };

  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const handleEndDateChange = (s: Dayjs | null) => {
    // console.log(s?.toDate().toLocaleDateString());
    setEndDate(s);
  };

  const [times, setTimes] = useState<number | string>("");
  const handleTimesChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    if (value === "") {
      setTimes("");
    } else {
      setTimes(Number(value) || 0);
    }
  };

  const [price, setPrice] = useState<number | string>("");
  const handlePriceChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    if (value === "") {
      setPrice("");
    } else {
      setPrice(Number(value) || 0);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof month === "number") {
      handleEndDateChange(startDate?.add(month, "month")!);
    } else {
      handleEndDateChange(startDate);
    }
  }, [month, startDate]);

  function vaildation() {
    if (!gym) {
      alert("센터명을 선택해주세요.");
      return false;
    }

    if (ticketType !== "period" && (times === "" || times === null)) {
      alert("횟수를 입력해주세요.");
      return false;
    }

    if (price === "" || price === null) {
      alert("가격을 입력해주세요.");
      return false;
    }

    return true;
  }

  const handleSubmit = () => {
    if (vaildation()) {
      handleClickOpen();
    }
  };

  // TODO state 모아서 전달
  const handleDialogDone = () => {
    handleClose();
    navigate("../tickets");
    return;
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        koKR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <Box sx={{ width: "100%", mb: 1 }}>
        {/* 타이틀 */}
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
          {/* 센터명 선택 */}
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

          {/* 회원권 종류 선택 */}
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

          {/* 기간 선택 */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={700}>유효기간</Typography>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 120, width: "100%" }} size='small'>
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
            </Grid>
          </Grid>

          {/* 횟수 입력  */}
          {ticketType !== "period" && (
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontWeight={700}>횟수</Typography>
              <Grid item xs={6}>
                <TextField
                  value={times}
                  onChange={(event) => {
                    handleTimesChange(event);
                  }}
                  size='small'
                  variant='outlined'
                  type='number'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>회</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          )}

          {/* 시작일 선택 */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={700}>시작일</Typography>
            <Grid item xs={6}>
              <MobileDatePicker
                views={["year", "month", "day"]}
                format='YYYY년 MM월 DD일'
                slotProps={{
                  textField: { size: "small" },
                  toolbar: { hidden: true },
                }}
                value={startDate}
                onChange={(newValue) => handleStartDateChange(newValue)}
              />
            </Grid>
          </Grid>

          {/* 종료일 선택 */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={700}>종료일</Typography>
            <Grid item xs={6}>
              <MobileDatePicker
                views={["year", "month", "day"]}
                format='YYYY년 MM월 DD일'
                slotProps={{
                  textField: { size: "small" },
                  toolbar: { hidden: true },
                }}
                value={endDate}
                onChange={(newValue) => handleEndDateChange(newValue)}
              />
            </Grid>
          </Grid>

          {/* 가격 입력 */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={700}>가격</Typography>
            <Grid item xs={6}>
              <TextField
                value={price}
                onChange={(event) => {
                  handlePriceChange(event);
                }}
                size='small'
                variant='outlined'
                type='number'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>원</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      {/* 등록 버튼 */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button variant='contained' startIcon={<Done />} onClick={handleSubmit}>
          완료
        </Button>
      </Box>
      {/* 확인 Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"주의"}</DialogTitle>
        <DialogContent sx={{ width: "80vw" }}>
          <DialogContentText textAlign={"center"}>
            등록 시 수정이 불가합니다. <br /> 다시 한 번 확인해주세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleDialogDone} autoFocus>
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
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
