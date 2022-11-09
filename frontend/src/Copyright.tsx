import * as React from "react";
import { Typography, Paper, Box, Container } from "@mui/material";
import Image from "next/image";

export default function Copyright() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright https://www.edig.no/ © {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
