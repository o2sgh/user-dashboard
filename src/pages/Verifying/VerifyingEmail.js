import { Box, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import HttpRequest from "../../utils/hooks/HttpRequest";
let flage = true;

function VerifyingEmail() {
  const { id } = useParams();
  const { handleVerifyEmail } = HttpRequest();
  useEffect(() => {
    if (id && flage) {
      handleVerifyEmail(id);
      flage = false;
    }
  }, [id]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: "30%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Verifying Your email</Typography>
        <CircularProgress />
      </Card>
    </Box>
  );
}

export default VerifyingEmail;
