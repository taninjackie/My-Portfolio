import React, { SyntheticEvent, useEffect, useState } from "react";
import { Container, Grid, Tabs, Tab, Box } from "@mui/material";
import { styled, SxProps } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CSS from "csstype";


interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
interface StyledTabProps {
    label: string;
}

//defalut Theme is Black == false
let MyTheme: any = {
    color: "white",
    indicatorSpanColor: "#FFFFAB"
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
        backgroundColor: MyTheme.indicatorSpanColor
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
    },

}));

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
const LightModeIconStyle: SxProps = {
    paddingTop: "6px",
    color: "black",
    justifyContent: "center",
    fontSize: "medium",
    textAlign: "center"
}
const BoxOfLightModeIconMobileStyle: SxProps = {
    borderRadius: "4px",
    margin: "35px 0 auto 50px",
    width: "40px",
    height: "30px",
    backgroundColor: "#FFFFAB",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#F6F65E"
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



export const Navbar = ({ }) => {
    const [value, setValue] = React.useState(Number(null));
    const [theme, setTheme] = useState(false)
    const [themeFnCount, setthemeFnCount] = useState(0)

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
    let lightBoxComponentStyle: SxProps

    //Media Query
    const match925px: boolean = useMediaQuery("(max-width:925px)");
    //const match1054px: boolean = useMediaQuery("(max-width:1054px)");
    let navbarPaddingLeft: string = "100px"
    /*
    if (match1054px) {
        lightBoxComponentStyle = BoxOfLightModeIconMobileStyle
    }
    else {
        lightBoxComponentStyle = BoxOfLightModeIconStyle
    }*/

    if (match925px) {
        lightBoxComponentStyle = BoxOfLightModeIconMobileStyle
        StyledTabComponent = ""
        navbarPaddingLeft = "5px"
        TitleSize = "27px"
        DehazeOutlinedComponent =
            <>
                <Box sx={DehazeOutlinedBoxStyle}>
                    <DehazeOutlinedIcon style={{ color: "black", paddingTop: "3px" }} />
                </Box>

            </>
    }
    else {
        lightBoxComponentStyle = BoxOfLightModeIconStyle
        StyledTabComponent =
            <Box>
                <StyledTabs sx={{ marginTop: "25px", paddingLeft: "50px" }} value={value} onChange={handleChange} aria-label="tabs">
                    <StyledTab label="Home" />
                    <StyledTab label="Projects" />
                    <StyledTab label="Posts" />
                    <StyledTab label="Source" />
                </StyledTabs>
            </Box>
    }
    /* useEffect(() =>{
         if(themeFnCount === 0){
             document.getElementById("themeBox")?.addEventListener('click' , () =>{changeTheme()})
             setthemeFnCount(1)
         }
     })*/

    if (theme === false) {
        document.body.style.backgroundColor = "#212022"
        MyTheme = {
            color: "white",
            indicatorSpanColor: "#FFFFAB",

        }
    }
    else if (theme === true) {
        document.body.style.backgroundColor = "#FFCA84"
        MyTheme = {
            color: "black",
            indicatorSpanColor: "black",
        }
    }




    return (
        <Container>
            <nav id="navbar" style={{
                width: "100%",
                height: "80px",
                background: "rgb(33,32,34,33)",
                color: MyTheme.color,
                display: "flex",
                flexDirection: "row",
                paddingLeft: navbarPaddingLeft
            }}>
                <div style={{ marginTop: "9px" }}><h1 style={TitleStyle}><a style={{ textDecoration: "none", color: "white" }} href="/">Tanin Limsiriwong</a></h1></div>

                {DehazeOutlinedComponent}
                {StyledTabComponent}
                <Box onClick={() => {
                    setTheme(!theme)
                }} id="themeBox" sx={lightBoxComponentStyle}>
                    <LightModeIcon sx={LightModeIconStyle} />
                </Box>
            </nav>
        </Container>
    )
}