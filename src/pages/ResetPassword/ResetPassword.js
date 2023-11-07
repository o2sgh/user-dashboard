import React, { useEffect, useState } from "react";
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
  body_link,
  displayBox,
  mainContainer,
  mainFormContainer,
  submitButtons,
  submitButtonsEdit,
  submitButtonsTwo,
  textField,
} from "./resetPasswordStyles";
import HttpRequest from "../../utils/hooks/HttpRequest";
function ResetPassword() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [userName, setUserName] = useState();
  const { handlePasswordResetApi, handleUpdateProfile } = HttpRequest();
  const handleLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      setUserName(user?.userName);
    }
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRequesSubmit = (data) => {
    handlePasswordResetApi(data, handleLoading);
  };
  return (
    <Box sx={mainContainer}>
      <Box sx={mainFormContainer}>
        <Typography sx={body_heading}>Profile</Typography>
        <Box sx={displayBox}>
          <Typography sx={body_label}>User Name</Typography>
          <TextField
            fullWidth
            sx={textField}
            disabled={isReadOnly}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Box>
        <Box sx={displayBox}>
          <Typography sx={body_label}>Email</Typography>
          <TextField fullWidth sx={textField} disabled value={user?.email} />
        </Box>
        <Box
          sx={{
            ...displayBox,
            width: "100%",
            flexDirection: "row !important",
            justifyContent: "center!important",
            alignItems: "center !important",
            gap: 1,
          }}
        >
          <Button sx={submitButtonsEdit} onClick={() => setIsReadOnly(false)}>
            Edit
          </Button>
          <Button
            sx={submitButtonsTwo}
            onClick={() => {
              setLoading(true);
              handleUpdateProfile(userName, handleLoading);
            }}
          >
            {loading ? <CircularProgress /> : "Submit"}
          </Button>
        </Box>
        <Box sx={displayBox}>
          <Typography sx={body_link} onClick={() => setShowPasswordForm(true)}>
            ResetPassword
          </Typography>
        </Box>
      </Box>
      {showPasswordForm && (
        <Box sx={{ ...mainFormContainer, mt: 10 }}>
          <Typography sx={body_heading}>Reset Password</Typography>
          <form onSubmit={handleSubmit(handleRequesSubmit)}>
            <Box sx={displayBox}>
              <Typography sx={body_label}>Old Password</Typography>
              <TextField
                fullWidth
                sx={textField}
                {...register("oldPassword", {
                  required: true,
                })}
              />
              {errors.oldPassword && (
                <Typography sx={body_error}>This field is required</Typography>
              )}
            </Box>
            <Box sx={displayBox}>
              <Typography sx={body_label}>New Password</Typography>
              <TextField
                fullWidth
                sx={textField}
                type="password"
                helperText="one lower one upper character one digit character one special character  least 8 characters"
                {...register("newPassword", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
                    message: "please follow pattern",
                  },
                })}
              />
              {errors.newPassword && (
                <Typography sx={body_error}>
                  {errors.newPassword.message}
                </Typography>
              )}
            </Box>
            <Box sx={displayBox}>
              <Typography sx={body_label}>Confirm Password</Typography>
              <TextField
                fullWidth
                sx={textField}
                type="password"
                {...register("reEnterPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("newPassword") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
              {errors.reEnterPassword && (
                <Typography sx={body_error}>
                  {errors.reEnterPassword.message}
                </Typography>
              )}
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
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
}

export default ResetPassword;
