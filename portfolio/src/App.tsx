import { Container } from "@mui/material";
import { useState, useCallback } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";

type ThemeMode = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Container maxWidth="lg">
        <Home theme={theme} />
      </Container>
    </Container>
  );
}

export default App;
