import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
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
} from "./signupStyles";
import HttpRequest from "../../utils/hooks/HttpRequest";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { errorMessage } from "../../components/SweetAlert";
function Signup() {
  const [loading, setLoading] = useState(false);
  const { handleSignupApi, handleLoginWithGoogle } = HttpRequest();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLoading = () => {
    setLoading(false);
  };
  const handleRequesSubmit = (data) => {
    setLoading(true);
    handleSignupApi(data, handleLoading);
  };
  return (
    <Box sx={mainContainer}>
      <Box sx={mainFormContainer}>
        <Typography sx={body_heading}>Signup</Typography>
        <form onSubmit={handleSubmit(handleRequesSubmit)}>
          <Box sx={displayBox}>
            <Typography sx={body_label}>User Name</Typography>
            <TextField
              fullWidth
              sx={textField}
              {...register("userName", {
                required: true,
              })}
            />
            {errors.userName && (
              <Typography sx={body_error}>This field is required</Typography>
            )}
          </Box>
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
              helperText="one lower one upper character one digit character one special character  least 8 characters"
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
                  message: "please follow pattern",
                },
              })}
            />
            {errors.password && (
              <Typography sx={body_error}>{errors.password.message}</Typography>
            )}
          </Box>
          <Box sx={displayBox}>
            <Typography sx={body_label}>Confirm Password</Typography>
            <TextField
              fullWidth
              sx={textField}
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <Typography sx={body_error}>
                {errors.confirmPassword.message}
              </Typography>
            )}
            <Typography sx={body_text}>
              Have Account{" "}
              <Link
                to="/login"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                {" "}
                Login
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
              {loading ? <CircularProgress /> : "Signup"}
            </Button>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleLoginWithGoogle(credentialResponse?.credential);
              }}
              onError={() => {
                errorMessage("Login Failed");
              }}
              size="large"
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Signup;
