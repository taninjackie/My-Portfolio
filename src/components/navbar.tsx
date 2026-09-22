import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Tabs, 
  Tab, 
  IconButton, 
  Typography, 
  Tooltip, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useTheme
} from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

const TABS = ['Home', 'Projects', 'Posts', 'Source'] as const;

export const Navbar: React.FC<NavbarProps> = ({ 
  theme: mode, 
  onToggleTheme, 
  activeTab = 0, 
  onTabChange 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isDark = mode === 'dark';

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    if (onTabChange) {
      onTabChange(newValue);
    }
  };

  const handleMobileNavClick = (index: number) => {
    if (onTabChange) {
      onTabChange(index);
    }
    setMobileOpen(false);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: isDark 
          ? "rgba(11, 15, 25, 0.75)" 
          : "rgba(248, 250, 252, 0.8)",
        borderBottom: isDark 
          ? "1px solid rgba(255, 255, 255, 0.08)" 
          : "1px solid rgba(226, 232, 240, 0.8)",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Logo Brand / Avatar Monogram */}
          <Box
            onClick={() => onTabChange && onTabChange(0)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: isDark
                  ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                  : "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.95rem",
                boxShadow: isDark
                  ? "0 0 15px rgba(99, 102, 241, 0.4)"
                  : "0 0 15px rgba(79, 70, 229, 0.25)",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              TL
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.05rem", sm: "1.15rem" },
                  color: muiTheme.palette.text.primary,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Tanin Limsiriwong
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: 0.2 }}>
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    boxShadow: "0 0 8px #10B981",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: muiTheme.palette.text.secondary,
                    letterSpacing: "0.02em",
                  }}
                >
                  Frontend Engineer
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Desktop Navigation Tabs */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              backgroundColor: isDark 
                ? "rgba(255, 255, 255, 0.04)" 
                : "rgba(0, 0, 0, 0.03)",
              p: 0.5,
              borderRadius: "14px",
              border: isDark 
                ? "1px solid rgba(255, 255, 255, 0.06)" 
                : "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                minHeight: 38,
                "& .MuiTabs-indicator": {
                  height: "100%",
                  borderRadius: "10px",
                  backgroundColor: isDark ? "rgba(99, 102, 241, 0.2)" : "#FFFFFF",
                  border: isDark 
                    ? "1px solid rgba(99, 102, 241, 0.5)" 
                    : "1px solid rgba(226, 232, 240, 1)",
                  boxShadow: isDark 
                    ? "0 0 12px rgba(99, 102, 241, 0.3)" 
                    : "0 2px 8px rgba(0,0,0,0.06)",
                },
              }}
            >
              {TABS.map((tab, idx) => (
                <Tab
                  key={tab}
                  label={tab}
                  disableRipple
                  sx={{
                    minHeight: 38,
                    px: 2.2,
                    py: 0.5,
                    zIndex: 1,
                    fontSize: "0.875rem",
                    fontWeight: activeTab === idx ? 700 : 500,
                    color: activeTab === idx 
                      ? (isDark ? "#818CF8" : "#4F46E5")
                      : muiTheme.palette.text.secondary,
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: muiTheme.palette.text.primary,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Right Section: Theme Switcher & Mobile Menu Trigger */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
              <IconButton
                onClick={onToggleTheme}
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  backgroundColor: isDark 
                    ? "rgba(255, 255, 255, 0.05)" 
                    : "rgba(0, 0, 0, 0.04)",
                  border: isDark 
                    ? "1px solid rgba(255, 255, 255, 0.1)" 
                    : "1px solid rgba(0, 0, 0, 0.08)",
                  color: isDark ? "#FACC15" : "#4F46E5",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    backgroundColor: isDark 
                      ? "rgba(255, 255, 255, 0.12)" 
                      : "rgba(79, 70, 229, 0.1)",
                    transform: "rotate(15deg) scale(1.05)",
                  },
                }}
              >
                {isDark ? (
                  <LightModeOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                )}
              </IconButton>
            </Tooltip>

            {/* Mobile Menu Icon */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                width: 42,
                height: 42,
                borderRadius: "12px",
                color: muiTheme.palette.text.primary,
                backgroundColor: isDark 
                  ? "rgba(255, 255, 255, 0.05)" 
                  : "rgba(0, 0, 0, 0.04)",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: isDark ? "#0B0F19" : "#FFFFFF",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" fontWeight={700}>
            Navigation
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {TABS.map((tab, idx) => (
            <ListItem disablePadding key={tab} sx={{ mb: 1 }}>
              <ListItemButton
                selected={activeTab === idx}
                onClick={() => handleMobileNavClick(idx)}
                sx={{
                  borderRadius: "10px",
                  py: 1.2,
                  px: 2,
                  "&.Mui-selected": {
                    backgroundColor: isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(79, 70, 229, 0.1)",
                    color: isDark ? "#818CF8" : "#4F46E5",
                    fontWeight: 700,
                  },
                }}
              >
                <ListItemText 
                  primary={tab} 
                  primaryTypographyProps={{ 
                    fontWeight: activeTab === idx ? 700 : 500,
                    fontSize: "1rem" 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
