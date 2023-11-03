import {
    Box,
    BoxProps,
    Modal,
    Typography,
    TypographyProps,
    styled,
} from "@mui/material";
import ColorButton from "./ColorButton";

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

    return (
        <>
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
                        <Typography>{modalContent?.stopCnt}</Typography>
                    </StackBox>
                    <StackBox>
                        <LabelTypo>정지일 수</LabelTypo>
                        {/* TODO 정지일 수 선택 (1~2주 or 직접 선택) */}
                        <Typography>{modalContent?.stopCnt}</Typography>
                    </StackBox>
                    <Box sx={{ mt: 2 }}>
                        <LabelTypo>정지 기간 선택</LabelTypo>
                        {/* TODO 날짜 선택 2개 필요 */}
                        달력~
                    </Box>
                    <StackBox>
                        <LabelTypo>회원권 재개일</LabelTypo>
                        {/* TODO 정지일 수, 시작일 선택 시 자동 계산 */}
                        <Typography>2023.03.08</Typography>
                    </StackBox>

                    <Box
                        mt={3}
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <ColorButton newColor={"#757575"}>
                            <Typography sx={{ fontWeight: 700 }}>
                                취 소
                            </Typography>
                        </ColorButton>
                        <ColorButton newColor={"#8B1D1D"}>
                            <Typography sx={{ fontWeight: 700 }}>
                                정 지
                            </Typography>
                        </ColorButton>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
