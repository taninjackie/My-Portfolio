import React, { useState, useCallback } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import { styled, SxProps, Theme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import "./css/navbarBackDropFilter.css";
import "./css/navbarMediaQuery.css";

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const TABS = ['Home', 'Projects', 'Posts', 'Source'] as const;

// Theme configurations
const THEME_CONFIG = {
  dark: {
    color: "white",
    indicatorSpanColor: "#FFFFAB",
    background: "rgb(33,32,34,0.5)",
    bodyBackground: "#212022",
    iconBackground: "#805AD5",
    iconHoverBackground: "#721463",
  },
  light: {
    color: "black",
    indicatorSpanColor: "black",
    background: "rgb(240,231,219,0.5)",
    bodyBackground: "#F0E7DB",
    iconBackground: "#FFFFAB",
    iconHoverBackground: "#F6F65E",
  },
};

const getBaseIconSx = (color: string): SxProps<Theme> => ({
  paddingTop: "6px",
  color,
  justifyContent: "center",
  fontSize: "medium",
  textAlign: "center"
});

const getBaseBoxSx = (backgroundColor: string, hoverBackground: string): SxProps<Theme> => ({
  borderRadius: "4px",
  width: "40px",
  height: "30px",
  backgroundColor,
  textAlign: "center",
  '&:hover': {
    backgroundColor: hoverBackground
  },
  transition: "all .35s ease-in-out",
});

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
  }
});

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  "&.Mui-selected": {
    color: "inherit"
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)"
  },
}));

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [value, setValue] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:925px)");
  const isExtraSmall = useMediaQuery("(max-width:360px)");

  const currentTheme = THEME_CONFIG[theme];

  // Update body background and localStorage when theme changes
  React.useEffect(() => {
    document.body.style.backgroundColor = currentTheme.bodyBackground;
    localStorage.setItem("theme", theme === 'dark' ? "false" : "true");
  }, [theme, currentTheme.bodyBackground]);

  const handleThemeToggle = useCallback(() => {
    onToggleTheme();
  }, [onToggleTheme]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderThemeToggleButton = () => {
    const isDark = theme === 'dark';
    const Icon = isDark ? LightModeIcon : DarkModeIcon;
    const iconColor = isDark ? "black" : "white";
    
    return (
      <Box
        className="animate__animated animate__flipInX"
        onClick={handleThemeToggle}
        id="themeBox"
        sx={{
          ...getBaseBoxSx(currentTheme.iconBackground, currentTheme.iconHoverBackground),
          margin: isMobile ? "35px 0 auto 5px" : "35px 0 auto 150px",
        }}
      >
        <Icon sx={getBaseIconSx(iconColor)} />
      </Box>
    );
  };

  const renderNavigationTabs = () => {
    if (isMobile) {
      return null;
    }

    return (
      <Box>
        <StyledTabs
          sx={{
            marginTop: "25px",
            paddingLeft: "50px",
            "& .MuiTabs-indicatorSpan": {
              maxWidth: 60,
              width: "100%",
              backgroundColor: currentTheme.indicatorSpanColor
            }
          }}
          value={value}
          onChange={handleTabChange}
          aria-label="navigation tabs"
        >
          {TABS.map((tab) => (
            <StyledTab key={tab} label={tab} sx={{ color: currentTheme.color }} />
          ))}
        </StyledTabs>
      </Box>
    );
  };

  const renderMobileMenuButton = () => {
    if (!isMobile) {
      return null;
    }

    return (
      <Box
        id="dropmenu"
        sx={{
          width: "40px",
          height: "30px",
          background: "white",
          margin: isExtraSmall ? "-10px 0 auto 100px" : "35px 0 auto 30px",
          textAlign: "center",
          borderRadius: "4px"
        }}
      >
        <DehazeOutlinedIcon style={{ color: "black", paddingTop: "3px" }} />
      </Box>
    );
  };

  const navbarHeight = isExtraSmall ? "130px" : "80px";
  const titleSize = isMobile ? "27px" : "25px";
  const paddingLeft = isMobile ? "280px" : "100px";

  return (
    <Container maxWidth={false} disableGutters>
      <nav
        id="navbar"
        style={{
          width: "100%",
          height: navbarHeight,
          background: currentTheme.background,
          color: currentTheme.color,
          display: "flex",
          flexDirection: "row",
          paddingLeft,
          transition: "background 0.3s ease-in-out",
          position: "fixed",
        }}
      >
        <div style={{ marginTop: "9px" }}>
          <h1 style={{ fontSize: titleSize, margin: 0 }}>
            <a
              style={{ textDecoration: "none", color: currentTheme.color }}
              href="/"
            >
              Tanin Limsiriwong
            </a>
          </h1>
        </div>
        {renderMobileMenuButton()}
        {renderNavigationTabs()}
        {renderThemeToggleButton()}
      </nav>
    </Container>
  );
};
