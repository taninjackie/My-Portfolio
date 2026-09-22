import { Container, ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { useState, useCallback, useMemo, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";

type ThemeMode = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'false' || saved === 'light') return 'light';
    return 'dark';
  });

  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  }, []);

  // Sync body background color
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#0B0F19' : '#F8FAFC';
    document.body.style.color = theme === 'dark' ? '#F8FAFC' : '#0F172A';
  }, [theme]);

  // Create customized MUI Theme
  const muiTheme = useMemo(() => {
    const isDark = theme === 'dark';
    return createTheme({
      palette: {
        mode: theme,
        background: {
          default: isDark ? '#0B0F19' : '#F8FAFC',
          paper: isDark ? '#111827' : '#FFFFFF',
        },
        primary: {
          main: isDark ? '#6366F1' : '#4F46E5',
          light: isDark ? '#818CF8' : '#6366F1',
          dark: isDark ? '#4338CA' : '#3730A3',
        },
        secondary: {
          main: isDark ? '#A855F7' : '#7C3AED',
        },
        text: {
          primary: isDark ? '#F8FAFC' : '#0F172A',
          secondary: isDark ? '#94A3B8' : '#475569',
        },
      },
      typography: {
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        h1: { fontWeight: 800 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
      },
      shape: {
        borderRadius: 12,
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              boxShadow: isDark 
                ? '0 10px 30px -10px rgba(0,0,0,0.5)' 
                : '0 10px 30px -10px rgba(0,0,0,0.06)',
              border: isDark 
                ? '1px solid rgba(255, 255, 255, 0.08)' 
                : '1px solid rgba(226, 232, 240, 0.8)',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '10px',
            },
          },
        },
      },
    });
  }, [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh', 
          backgroundColor: theme === 'dark' ? '#0B0F19' : '#F8FAFC',
          color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
          transition: 'background-color 0.4s ease, color 0.4s ease',
          pb: 8
        }}
      >
        <Navbar 
          theme={theme} 
          onToggleTheme={toggleTheme} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 14 } }}>
          <Home theme={theme} activeTab={activeTab} onTabChange={setActiveTab} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
