import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import star from "./assets/icon-star.svg";

const Rate = ({ children }) => (
  <Box
    component="span"
    sx={{
      cursor: "pointer",
      width: { xs: 40, sm: 50 },
      height: { xs: 40, sm: 50 },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9999,
      backgroundColor: "hsl(213, 19%, 18%)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      ":hover": {
        boxShadow: "none",
        backgroundColor: "hsl(217, 12%, 63%)",
      },
    }}
    fontFamily={`'Overpass', sans-serif`}
    onClick={(e) => {
      // alert(`You selected ${children} out of 5`);
      alert(`You selected ${children} out of 5
      ${e.target.textContent} is selected now`);
      e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    }}
  >
    {children}
  </Box>
);
const App = () => {
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
      <Card
        sx={{
          maxWidth: { xs: 275, sm: 375 },
          backgroundColor: "hsl(213, 19%, 18%)",
          color: "white",
          borderRadius: 5,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          pb: 1,
        }}
      >
        <CardContent>
          <Box
            sx={{
              backgroundColor: "#3c424a",
              width: 40,
              height: 40,
              borderRadius: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <img src={star} alt="star" />
          </Box>
          <Typography
            variant="h5"
            component="h1"
            my={1.5}
            fontFamily={`'Overpass', sans-serif`}
          >
            How did we do?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 12, sm: 15 },
              color: "hsl(216, 12%, 54%)",
            }}
            fontFamily={`'Overpass', sans-serif`}
          >
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Rate>1</Rate>
            <Rate>2</Rate>
            <Rate>3</Rate>
            <Rate>4</Rate>
            <Rate>5</Rate>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              width: "95%",
              margin: "0 auto",
              backgroundColor: "hsl(25, 97%, 53%)",
              color: "white",
              borderRadius: 999,
              ":hover": {
                color: "hsl(25, 97%, 53%)",
                backgroundColor: "white",
              },
            }}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
  // How did we do? Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! 1 2 3 4 5 Submit You selected out of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
};

export default App;
