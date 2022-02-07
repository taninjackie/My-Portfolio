
import { Container } from "@mui/material";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";

function App() {
  const [theme, changeTheme] = useState(false)
  return (
    <Container>
      <Navbar changeTheme={()=>changeTheme(!theme)}/>
      <Container>
        <Home />
      </Container>
    </Container>
  );
}

export default App;
