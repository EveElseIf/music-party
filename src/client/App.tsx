import { Box, Button } from "@mui/material";
import reactLogo from "./assets/react.svg";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="contained" onClick={() => {
        enqueueSnackbar(<Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0.5rem"}>
          <div>
            Hello World
          </div>
          <img src={reactLogo} />
        </Box>, {
          variant: "success"
        })
      }}>Test1</Button>

    </div>
  );
}

export default App;
