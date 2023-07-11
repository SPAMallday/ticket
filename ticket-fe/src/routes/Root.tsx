import { Box } from "@mui/material";
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>  
            <Box px={3} pt={2}>
                <Outlet />
            </Box>
            <NavBar />
        </>
    );
}