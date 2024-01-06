import { Container } from "@mui/material";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AppRoutes from "./Routes/AppRoutes";
import { MobileDisplayContextProvider } from "./Store/Context/MobileDisplayContext";

const App = () => {
  //
  const username = sessionStorage.getItem("username");
  console.log(username);

  //
  return (
    <Container
      sx={{ minHeight: "100vh", bgcolor: "whitesmoke" }}
      maxWidth={"xl"}
    >
      <MobileDisplayContextProvider>
        <ProtectedRoute>
          <AppRoutes />
        </ProtectedRoute>
      </MobileDisplayContextProvider>
    </Container>
  );
};

export default App;
