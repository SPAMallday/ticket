import {
    Box,
    BoxProps,
    Grid,
    InputAdornment,
    Modal,
    TextField,
    Typography,
    TypographyProps,
    styled,
} from "@mui/material";
import ColorButton from "../ColorButton";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    LocalizationProvider,
    MobileDatePicker,
    koKR,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #c1c1c1",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const LabelTypo = styled(Typography)<TypographyProps>(({ theme }: any) => ({
    fontWeight: 700,
    fontSize: "1.1rem",
}));

const StackBox = styled(Box)<BoxProps>(({ theme }: any) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
}));

interface ModalContent {
    ticketId: number;
    stopCnt: number;
}

interface ModalProps {
    open: boolean;
    onClose: () => void;
    modalContent: ModalContent | null;
}

export default function TicketStopModal({
    open,
    onClose,
    modalContent,
}: ModalProps) {
    const handleClose = () => onClose();

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

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const handleStartDateChange = (s: Dayjs | null) => {
        setStartDate(s);
    };

    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, "day"));
    const handleEndDateChange = (s: Dayjs | null) => {
        setEndDate(s);
    };

    useEffect(() => {
        if (typeof times === "number") {
            handleEndDateChange(startDate?.add(times, "day")!);
        } else {
            // handleEndDateChange(startDate);
        }
    }, [times, startDate]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={
                koKR.components.MuiLocalizationProvider.defaultProps.localeText
            }
        >
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography
                        variant='h6'
                        fontWeight={700}
                        textAlign={"center"}
                    >
                        회원권 정지
                    </Typography>
                    <StackBox>
                        <LabelTypo>현재 정지 횟수</LabelTypo>
                        <Typography>{modalContent?.stopCnt} 회</Typography>
                    </StackBox>
                    <StackBox sx={{ alignItems: "center" }}>
                        <LabelTypo>정지일 수</LabelTypo>
                        <TextField
                            value={times}
                            onChange={(event) => {
                                handleTimesChange(event);
                            }}
                            size='small'
                            variant='outlined'
                            type='number'
                            sx={{ width: "7.5rem" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        일
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </StackBox>
                    <Box sx={{ mt: 2 }}>
                        <LabelTypo sx={{ mb: 2 }}>정지 기간 선택</LabelTypo>
                        {/* TODO 날짜 선택 2개 필요 */}
                        <Grid
                            container
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            sx={{ mb: 1 }}
                        >
                            <Typography fontWeight={700}>시작일</Typography>
                            <Grid item>
                                <MobileDatePicker
                                    views={["year", "month", "day"]}
                                    format='YYYY.MM.DD'
                                    slotProps={{
                                        textField: { size: "small" },
                                        toolbar: { hidden: true },
                                    }}
                                    sx={{ width: "7.5rem" }}
                                    value={startDate}
                                    onChange={(newValue) =>
                                        handleStartDateChange(newValue)
                                    }
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
                            <Grid item>
                                <MobileDatePicker
                                    views={["year", "month", "day"]}
                                    format='YYYY.MM.DD'
                                    slotProps={{
                                        textField: { size: "small" },
                                        toolbar: { hidden: true },
                                    }}
                                    sx={{ width: "7.5rem" }}
                                    value={endDate}
                                    onChange={(newValue) =>
                                        handleEndDateChange(newValue)
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <StackBox>
                        <Typography fontSize={"0.8rem"}>
                            정지일 수와 시작일을 기준으로 종료일을 계산하며,
                            직접 선택을 통해 종료일 수정이 가능합니다.
                        </Typography>
                    </StackBox>
                    {/*                     
                    <StackBox>
                        <LabelTypo>회원권 재개일</LabelTypo>
                        // TODO 정지일 수, 시작일 선택 시 자동 계산 
                        <Typography>2023.03.08</Typography>
                    </StackBox> 
                    */}

                    <Box
                        mt={3}
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <ColorButton newColor={"#757575"} onClick={handleClose}>
                            <Typography sx={{ fontWeight: 700 }}>
                                취 소
                            </Typography>
                        </ColorButton>
                        {/* TODO 정지 확정 버튼 처리, 정지 기간 valid */}
                        <ColorButton newColor={"#8B1D1D"}>
                            <Typography sx={{ fontWeight: 700 }}>
                                확 인
                            </Typography>
                        </ColorButton>
                    </Box>
                </Box>
            </Modal>
        </LocalizationProvider>
    );
}
