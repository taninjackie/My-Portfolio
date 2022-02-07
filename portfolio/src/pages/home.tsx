import { Grid, Paper, Box } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

interface IntroBoxProps {
    marginLeft: string,
    width: string,
    height: string,
    children: React.ReactNode,
}
interface ThemeType {
    color: string,
    background: string,
    introBackground: string
}


//Theme
let Theme: ThemeType = {
    //DarkTheme
    color: "white",
    background: "rgb(32,32,32,0)",
    introBackground: "rgb(101,101,101)",
}


interface IntroBoxResponsiveType {
    IntroBoxMarginLeft: string,
    IntroBoxHeight: string,
    BoxHeaderWidth: string
}


const IntroBox = (props: IntroBoxProps) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: props.width,
                height: props.height,
            },
            marginLeft: props.marginLeft,

        }}
        >
            <Paper style={{ background: Theme.introBackground, color: Theme.color }} elevation={3} >
                {props.children}
            </Paper>
        </Box>

    )
}
const MyBox = () => {
    //mediaQuery
    let IntroBoxResponsive: IntroBoxResponsiveType = {
        IntroBoxMarginLeft: "200px",
        IntroBoxHeight: "80px",
        BoxHeaderWidth: "82%",
    }
    if (useMediaQuery('(max-width:769px)')) {
        IntroBoxResponsive = { ...IntroBoxResponsive, IntroBoxMarginLeft: "20px" }
    }
    if (useMediaQuery('(max-width:508px)')) {
        IntroBoxResponsive = { ...IntroBoxResponsive, IntroBoxMarginLeft: "-20px", BoxHeaderWidth: "100%", IntroBoxHeight: "110px" }
    }
    if (useMediaQuery('(max-width:425px)')) {
        IntroBoxResponsive = { ...IntroBoxResponsive, IntroBoxMarginLeft: "-20px", BoxHeaderWidth: "100%", IntroBoxHeight: "130px" }
    }
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: IntroBoxResponsive.BoxHeaderWidth,
                height: 1000,
            },

        }}
        >
            <Paper style={{ background: "rgb(32,32,32,0)" }} elevation={0} >
                <IntroBox height={IntroBoxResponsive.IntroBoxHeight} width="70%" marginLeft={IntroBoxResponsive.IntroBoxMarginLeft}>
                    <h3 style={{ margin: "10px 0 auto 10px" }}>Tanin Limsiriwong</h3>
                    <h4 style={{ margin: "10px 0 auto 20px" }}>Front-end developer</h4>
                    <br /><br />
                    <h3 style={{ textDecoration: "underline" }}>Bio</h3>
                    <p>
                        <b>2021</b> : Graduated with a bachelor's degree at Computer Engineering Mahidol University <br /><br />
                        <b>2017</b> : Completed secondary education at Phichit Pittayakom School <br /><br />
                        <b>1999</b> : Born in Bangkok Thailand <br /><br />
                    </p>
                    <h3 style={{ textDecoration: "underline" }}>Main Skill</h3>
                    <p>
                        <b>-React</b> <br />
                        <b>-CSS</b> <br />
                        <b>-Matirial UI</b> <br />
                        <b>-TypeScript</b> <br />
                        <b>-React</b> <br />
                        <b>-Rest API</b> <br />
                        <b>-Docker</b> <br /><br />
                    </p>
                    <h3 style={{ textDecoration: "underline" }}>Other Skill</h3>
                    <p>
                        <b>-Techical Analysis For Financial Marketing</b> <br />
                        <b>-Trading Strategy</b> <br />
                        <b>-Esport Player</b>
                    </p>
                </IntroBox>
            </Paper>
        </Box>
    )

}

export const Home = () => {
    //Theme
    if (localStorage.getItem("theme") === "false") {
        //DarkTheme
        Theme = 
        {
            color: "white",
            background: "rgb(32,32,32,0)",
            introBackground: "rgb(101,101,101)",
        }
        
    }
    if (localStorage.getItem("theme") === "true") {
        Theme = {
            //LightTheme
            color: "black",
            background: "rgb(240,231,219,0)",
            introBackground: "rgb(213,207,200)"
        }
    }

    return (
        <Grid style={{ paddingTop: "100px", paddingLeft: "100px" }} container spacing={2}>
            <Grid item xs={12}>
                <MyBox/>
            </Grid>
        </Grid>
    )
}