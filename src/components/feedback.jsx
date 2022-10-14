import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import thankYou from "../assets/illustration-thank-you.svg";

export default function feedback({ value, show }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: 275, sm: 375 },
        minHeight: 318,
        backgroundColor: "hsl(213, 19%, 18%)",
        color: "white",
        borderRadius: 5,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        pb: 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="img" src={thankYou} alt="thank-you-illustration" />
        <Typography
          variant="caption"
          sx={{
            color: "hsl(25, 97%, 53%)",
            backgroundColor: "hsl(213, 19%, 30%)",
            borderRadius: 9999,
            px: 1.5,
            py: 0.5,
            my: 1,
          }}
        >
          You selected {value} out of 5
        </Typography>
        <Typography variant="h5" component="h2">
          Thank you!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "hsl(216, 12%, 54%)",
            my: 1,
            textAlign: "center",
            px: { xs: 0, md: 1.5 },
            fontSize: 15,
          }}
        >
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Typography>
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
          }}
          onClick={show}
        >
          Rate Again!
        </Button>
      </CardActions>
    </Card>
  );
}
