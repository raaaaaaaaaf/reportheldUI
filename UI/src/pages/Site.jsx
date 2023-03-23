import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/system";

export default function Home () {
    return(
        <>
        <Box sx={{ display: "flex", marginTop: '100px', marginLeft: '10px'}}>
            <Sidebar/>
            <h1>Site</h1>
        </Box>

        </>
    )
}