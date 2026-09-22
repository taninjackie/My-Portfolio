import { Grid, Paper, Box } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

interface IntroBoxProps {
  marginLeft: string;
  width: string;
  height: string;
  children: React.ReactNode;
}

interface ThemeColors {
  color: string;
  introBackground: string;
}

const THEME_COLORS: Record<'light' | 'dark', ThemeColors> = {
  dark: {
    color: "white",
    introBackground: "rgb(101,101,101)",
  },
  light: {
    color: "black",
    introBackground: "rgb(213,207,200)",
  },
};

interface ResponsiveConfig {
  IntroBoxMarginLeft: string;
  IntroBoxHeight: string;
  BoxHeaderWidth: string;
}

const getResponsiveConfig = (isMedium: boolean, isSmall: boolean, isExtraSmall: boolean): ResponsiveConfig => {
  let config: ResponsiveConfig = {
    IntroBoxMarginLeft: "200px",
    IntroBoxHeight: "80px",
    BoxHeaderWidth: "82%",
  };

  if (isMedium) {
    config.IntroBoxMarginLeft = "20px";
  }
  if (isSmall) {
    config.IntroBoxMarginLeft = "-20px";
    config.BoxHeaderWidth = "100%";
    config.IntroBoxHeight = "110px";
  }
  if (isExtraSmall) {
    config.IntroBoxMarginLeft = "-20px";
    config.BoxHeaderWidth = "100%";
    config.IntroBoxHeight = "130px";
  }

  return config;
};

const IntroBox: React.FC<IntroBoxProps> = ({ marginLeft, width, height, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width,
          height,
        },
        marginLeft,
      }}
    >
      <Paper elevation={3}>{children}</Paper>
    </Box>
  );
};

const MyBox: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isMedium = useMediaQuery('(max-width:769px)');
  const isSmall = useMediaQuery('(max-width:508px)');
  const isExtraSmall = useMediaQuery('(max-width:425px)');

  const responsiveConfig = getResponsiveConfig(isMedium, isSmall, isExtraSmall);
  const colors = THEME_COLORS[theme];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: responsiveConfig.BoxHeaderWidth,
          height: 1000,
        },
      }}
    >
      <Paper style={{ background: "rgb(32,32,32,0)" }} elevation={0}>
        <IntroBox
          height={responsiveConfig.IntroBoxHeight}
          width="70%"
          marginLeft={responsiveConfig.IntroBoxMarginLeft}
        >
          <h3 style={{ margin: "10px 0 auto 10px" }}>Tanin Limsiriwong</h3>
          <h4 style={{ margin: "10px 0 auto 20px" }}>Front-end developer</h4>
          <br /><br />
          <h3 style={{ textDecoration: "underline" }}>Bio</h3>
          <p>
            <b>2021</b>: Graduated with a bachelor's degree at Computer Engineering Mahidol University <br /><br />
            <b>2017</b>: Completed secondary education at Phichit Pittayakom School <br /><br />
            <b>1999</b>: Born in Bangkok Thailand <br /><br />
          </p>
          <h3 style={{ textDecoration: "underline" }}>Main Skill</h3>
          <p>
            <b>-React</b> <br />
            <b>-CSS</b> <br />
            <b>-Material UI</b> <br />
            <b>-TypeScript</b> <br />
            <b>-Rest API</b> <br />
            <b>-Docker</b> <br /><br />
          </p>
          <h3 style={{ textDecoration: "underline" }}>Other Skill</h3>
          <p>
            <b>-Technical Analysis For Financial Marketing</b> <br />
            <b>-Trading Strategy</b> <br />
            <b>-Esport Player</b>
          </p>
        </IntroBox>
      </Paper>
    </Box>
  );
};

interface HomeProps {
  theme: 'light' | 'dark';
}

export const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <Grid style={{ paddingTop: "100px", paddingLeft: "100px" }} container spacing={2}>
      <Grid item xs={12}>
        <MyBox theme={theme} />
      </Grid>
    </Grid>
  );
};