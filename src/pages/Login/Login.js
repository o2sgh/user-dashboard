import React, { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  body_error,
  body_heading,
  body_label,
  body_text,
  displayBox,
  mainContainer,
  mainFormContainer,
  submitButtons,
  textField,
} from "./loginStyles";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import HttpRequest from "../../utils/hooks/HttpRequest";
import CircularProgress from "@mui/material/CircularProgress";
import { errorMessage } from "../../components/SweetAlert";
function Login() {
  const { handleLoginApi, handleLoginWithGoogle } = HttpRequest();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoading = () => {
    setLoading(false);
  };
  const handleRequesSubmit = (data) => {
    setLoading(true);
    handleLoginApi(data, handleLoading);
  };
  return (
    <Box sx={mainContainer}>
      <Box sx={mainFormContainer}>
        <Typography sx={body_heading}>Login</Typography>
        <form onSubmit={handleSubmit(handleRequesSubmit)}>
          <Box sx={displayBox}>
            <Typography sx={body_label}>Email</Typography>
            <TextField
              fullWidth
              sx={textField}
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <Typography sx={body_error}>This field is required</Typography>
            )}
          </Box>
          <Box sx={displayBox}>
            <Typography sx={body_label}>Password</Typography>
            <TextField
              fullWidth
              sx={textField}
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.email && (
              <Typography sx={body_error}>{errors.email.message}</Typography>
            )}
            <Typography sx={body_text}>
              Don't have Account{" "}
              <Link
                to="/signup"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                {" "}
                Signup
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              ...displayBox,
              justifyContent: "center !important",
              alignItems: "center !important",
              gap: 2,
            }}
          >
            <Button sx={submitButtons} type="submit">
              {loading ? <CircularProgress /> : "Login"}
            </Button>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleLoginWithGoogle(credentialResponse?.credential);
              }}
              onError={() => {
                errorMessage("Login Failed");
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
