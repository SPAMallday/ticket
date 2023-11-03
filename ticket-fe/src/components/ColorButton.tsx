import { Button, ButtonProps } from "@mui/material";

type CustomButtonProps = ButtonProps & {
    newColor: string;
};

export default function ColorButton(props: CustomButtonProps) {
    return (
        <Button
            variant='contained'
            sx={{
                backgroundColor: props.newColor,
                borderColor: props.newColor,
                ":hover": {
                    backgroundColor: props.newColor,
                },
            }}
            {...props}
        />
    );
}
