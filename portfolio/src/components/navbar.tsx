import React from "react";
import { Container, Grid, Tabs, Tab, Box } from "@mui/material";
//import './css/navbar.css'
import { styled, SxProps } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
interface StyledTabProps {
    label: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 60,
        width: "100%",
        backgroundColor: "#FFFFAB"
    }
});

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
        color: "#fff"
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)"
    }
}));

const BoxOfLightModeIconStyle: SxProps = {
    borderRadius: "4px",
    margin: "30px 0 auto 250px",
    width: "40px",
    height: "30px",
    backgroundColor: "#FFFFAB",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#F6F65E"
    },
    transition: "background-color 0.3s ease",
}
const LightModeIconStyle: SxProps = {
    paddingTop: "6px",
    color: "black",
    justifyContent: "center",
    fontSize: "medium",
    textAlign: "center"
}
const BoxOfLightModeIconMobileStyle: SxProps = {
    borderRadius: "4px",
    margin: "30px 0 auto 0",
    width: "40px",
    height: "30px",
    backgroundColor: "#FFFFAB",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#F6F65E"
    },
    transition: "background-color 0.3s ease",
}
export const Navbar = ({ }) => {
    const [value, setValue] = React.useState(0);
    const LightIconMobileMediaQuery = useMediaQuery("(max-width:1054px)");
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Container>
            <nav id="navbar" style={{
                width: "100%",
                height: "80px",
                background: "rgb(33,32,34,33)",
                color: "white",
                display: "flex",
                flexDirection: "row",
                paddingLeft:"100px"
            }}>
                <div style={{ marginTop: "9px" }}><h1>Tanin Limsiriwong</h1></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                    <StyledTabs sx={{ marginTop: "22px" }} value={value} onChange={handleChange} aria-label="tabs">
                        <StyledTab label="Projects" />
                        <StyledTab label="Posts" />
                        <StyledTab label="Source" />
                    </StyledTabs>
                </Box>
                {LightIconMobileMediaQuery ? 
                <Box sx={BoxOfLightModeIconMobileStyle}><LightModeIcon sx={LightModeIconStyle} /></Box>
                :<Box sx={BoxOfLightModeIconStyle}><LightModeIcon sx={LightModeIconStyle} /></Box>
                }
            </nav>
        </Container>
    )
}