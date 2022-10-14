import React, { useState } from "react";
import { Box } from "@mui/material";
import Feedback from "./components/feedback";
import RateCard from "./components/RateCard";

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState("");
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(216, 12%, 8%)",
      }}
    >
      {!submit && (
        <RateCard
          rate={(e) => {
            setRate(e.currentTarget.textContent);
          }}
          show={() => {
            setSubmit(true);
          }}
          disabled={rate !== "" ? false : true}
        />
      )}
      {submit && (
        <Feedback
          value={rate}
          show={() => {
            setSubmit(false);
            setRate("");
          }}
        />
      )}
    </Box>
  );
};

export default App;
