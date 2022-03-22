import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [isdark, setIsdark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isdark ? "dark" : "light",
      background: {
        default: isdark ? "#121212" : "#eaeaea",
      },
    },
  });

  const handleThemeChange = () => {
    setIsdark(!isdark);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isdark={isdark} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
