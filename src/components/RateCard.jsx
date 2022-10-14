import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import star from "../assets/icon-star.svg";

export default function RateCard({ show, rate, disabled }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: 275, sm: 375 },
        height: 318,
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
            backgroundColor: "hsl(216, 12%, 54%)",
            width: 40,
            height: 40,
            borderRadius: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            fontSize: 15,
            color: "hsl(216, 12%, 54%)",
          }}
          fontFamily={`'Overpass', sans-serif`}
        >
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              variant="text"
              sx={{
                minWidth: { xs: 40, sm: 50 },
                minHeight: { xs: 40, sm: 50 },
                padding: 0,
                borderRadius: 9999,
                backgroundColor: "hsl(216, 12%, 54%)",
                border: "none",
                color: "white",
                ":hover": {
                  boxShadow: "none",
                  backgroundColor: " hsl(217, 12%, 63%)",
                },
                ":focus": {
                  backgroundColor: "hsl(25, 97%, 53%)",
                },
              }}
              fontFamily={`'Overpass', sans-serif`}
              onClick={rate}
            >
              {num}
            </Button>
          ))}
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
            textTransform: "initial",
            ":hover": {
              color: "hsl(25, 97%, 53%)",
              backgroundColor: "white",
            },
            ":disabled": {
              //   display: "none",
              color: "white",
            },
          }}
          onClick={show}
          disabled={disabled}
        >
          {disabled ? "Select number" : "Submit"}
        </Button>
      </CardActions>
    </Card>
  );
}
