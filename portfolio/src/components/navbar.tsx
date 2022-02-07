import React, { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import { styled, SxProps } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CSS from "csstype";
import "./css/navbarBackDropFilter.css";
import "./css/navbarMediaQuery.css";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
interface StyledTabProps {
    label: string;
}
interface NavBarHeightStyle{
    height :string
}

//defalut Theme is Black == false
let MyTheme: any = {
    color: "white",
    indicatorSpanColor: "#FFFFAB"
}

const BoxOfLightModeIconStyle: SxProps = {
    borderRadius: "4px",
    margin: "35px 0 auto 150px",
    width: "40px",
    height: "30px",
    backgroundColor: "#FFFFAB",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#F6F65E"
    },
    transition: "all .35s ease-in-out",
}
const BoxOfDarkModeIconStyle: SxProps = {
    borderRadius: "4px",
    margin: "35px 0 auto 150px",
    width: "40px",
    height: "30px",
    backgroundColor: "#805AD5",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#721463"
    },
    transition: "all .35s ease-in-out",
}
const LightModeIconStyle: SxProps = {
    paddingTop: "6px",
    color: "black",
    justifyContent: "center",
    fontSize: "medium",
    textAlign: "center"
}
const DarkModeIconStyle: SxProps = {
    paddingTop: "6px",
    color: "white",
    justifyContent: "center",
    fontSize: "medium",
    textAlign: "center"
}
const BoxOfLightModeIconMobileStyle: SxProps = {
    borderRadius: "4px",
    margin: "35px 0 auto 5px",
    width: "40px",
    height: "30px",
    backgroundColor: "#FFFFAB",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#F6F65E"
    },
    transition: "all .35s ease-in-out",
}
const BoxOfDarkModeIconMobileStyle: SxProps = {
    borderRadius: "4px",
    margin: "35px 0 auto 5px",
    width: "40px",
    height: "30px",
    backgroundColor: "#805AD5",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#721463"
    },
    transition: "all .35s ease-in-out",
}
const DehazeOutlinedBoxStyle: SxProps = {
    width: "40px",
    height: "30px",
    background: "white",
    margin: "35px 0 auto 30px",
    textAlign: "center",
    borderRadius: "4px"
}

//StyledTabs Varible
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
    color: MyTheme.color,
    "&.Mui-selected": {
        color: MyTheme.color
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)"
    },

}));

export const Navbar = (props:any) => {
    const [value, setValue] = useState(Number(null));

    let LightThemeButton;
    let DarkThemeButton;

    const changeToLightTheme = () => {
        localStorage.setItem("theme", "true");
        props.changeTheme();
    }
    const changeToDarkTheme = () => {
        localStorage.setItem("theme", "false");
        props.changeTheme();
    }
    //Navbar Height
    let navBarHeight:NavBarHeightStyle = {
        height : "80px"
    }
    //TitleStyle
    let TitleSize: string = "25px"
    let TitleStyle: CSS.Properties = {
        fontSize: TitleSize,
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //Component variable
    let StyledTabComponent, DehazeOutlinedComponent;

    //Component Style
    let lightBoxComponentStyle: SxProps;
    let darkBoxComponentStyle: SxProps;
    //Media Query
    let navbarPaddingLeft: string = "100px"

    if (useMediaQuery("(max-width:925px)")) {
        lightBoxComponentStyle = BoxOfLightModeIconMobileStyle
        darkBoxComponentStyle = BoxOfDarkModeIconMobileStyle
        StyledTabComponent = ""
        navbarPaddingLeft = "280px"
        TitleSize = "27px"
        DehazeOutlinedComponent =
            <>
                <Box id="dropmenu" sx={DehazeOutlinedBoxStyle}>
                    <DehazeOutlinedIcon style={{ color: "black", paddingTop: "3px" }} />
                </Box>

            </>
    }
    
    else {
        lightBoxComponentStyle = BoxOfLightModeIconStyle
        darkBoxComponentStyle = BoxOfDarkModeIconStyle
        
        StyledTabComponent =
            <Box>
                <StyledTabs sx={{
                    marginTop: "25px", paddingLeft: "50px", "& .MuiTabs-indicatorSpan": {
                        maxWidth: 60,
                        width: "100%",
                        backgroundColor: MyTheme.indicatorSpanColor
                    }
                }} value={value} onChange={handleChange} aria-label="tabs">
                    <StyledTab label="Home" />
                    <StyledTab label="Projects" />
                    <StyledTab label="Posts" />
                    <StyledTab label="Source" />
                </StyledTabs>
            </Box>
    }
    if (useMediaQuery("(max-width:360px)"))
    navBarHeight = {...navBarHeight, height:"130px"}

    if (localStorage.getItem("theme") === "false" || localStorage.getItem("theme") === null) {
        DarkThemeButton = <Box className="animate__animated animate__flipInX" onClick={() => {
            changeToLightTheme();
        }} id="themeBox" sx={lightBoxComponentStyle}>
            <LightModeIcon sx={LightModeIconStyle} />
        </Box>
        document.body.style.backgroundColor = "#212022"
        MyTheme = {
            color: "white",
            indicatorSpanColor: "#FFFFAB",
            background: "rgb(33,32,34,0.5)",
        }
        
    }
    else if (localStorage.getItem("theme") === "true") {
        LightThemeButton = <Box className="animate__animated animate__flipInX" onClick={() => {
            changeToDarkTheme();
        }} id="themeBox" sx={darkBoxComponentStyle}>
            <DarkModeIcon sx={DarkModeIconStyle} />
        </Box>
        document.body.style.backgroundColor = "#F0E7DB"
        MyTheme = {
            color: "black",
            indicatorSpanColor: "black",
            background: "rgb(240,231,219,0.5)",
        }
    }
    
    return (
        <Container>
            <nav id="navbar" style={{
                width: "100%",
                height: navBarHeight.height,
                background: MyTheme.background,
                color: MyTheme.color,
                display: "flex",
                flexDirection: "row",
                paddingLeft: navbarPaddingLeft,
                transition: "background 0.3s ease-in-out",
                position: "fixed",
                
            }}>
                <div style={{ marginTop: "9px" }}><h1 style={TitleStyle}><a style={{ textDecoration: "none", color: MyTheme.color }} href="/">Tanin Limsiriwong</a></h1></div>
                {DehazeOutlinedComponent}
                {StyledTabComponent}
                {DarkThemeButton}
                {LightThemeButton}    
            </nav>
        </Container>
    )
}