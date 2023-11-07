import axios from "axios";
import React, { useCallback, useState } from "react";
import Cookies from "js-cookie";
import { successMessage, errorMessage } from "../../components/SweetAlert";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constant";
// Custom hook for managing a simple counter
const HttpRequest = (counter) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleSignupApi = (data, handleLoading) => {
    axios
      .post(`${API_URL}/auth/signup`, data)
      .then((res) => {
        handleLoading();
        successMessage(res?.data?.message);
      })
      .catch((err) => {
        handleLoading();
        errorMessage(err?.response?.data?.message);
      });
  };
  const handleLoginApi = (data, handleLoading) => {
    axios
      .post(`${API_URL}/auth/login`, data)
      .then((res) => {
        Cookies.set("token", `${res?.data?.data?.token}`, { expires: 7 });
        // localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
        setTimeout(() => {
          navigate("/");
          handleLoading();
        }, 2000);
      })
      .catch((err) => {
        handleLoading();
        errorMessage(err?.response?.data?.message);
      });
  };

  const handleVerifyEmail = useCallback(
    (token) => {
      axios
        .post(`${API_URL}/auth/verify-email`, {
          encryptedToken: token,
        })
        .then((res) => {
          Cookies.set("token", `${res?.data?.data?.token}`, { expires: 7 });
          localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
          setTimeout(() => {
            navigate("/");
          }, 2000);
          successMessage(res?.data?.message);
        })
        .catch((err) => {
          errorMessage(err?.response?.data?.message);
        });
    },
    [count]
  );

  const handlePasswordResetApi = (data) => {
    const accessToken = Cookies.get("token");
    axios
      .patch(`${API_URL}/auth/reset-password`, data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res);
        successMessage(res?.data?.message);
      })
      .catch((err) => {
        errorMessage(err?.response?.data?.message);
      });
  };
  const handleUpdateProfile = (name, handleLoading) => {
    const accessToken = Cookies.get("token");
    axios
      .patch(
        `${API_URL}/auth/update-profile`,
        { userName: name },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((res) => {
        handleLoading();
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        successMessage(res?.data?.message);
      })
      .catch((err) => {
        errorMessage(err?.response?.data?.message);
      });
  };
  const handleDashboardStat = (handlApiResponse) => {
    const accessToken = Cookies.get("token");
    axios
      .get(`${API_URL}/users/get-dashboard-stats`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        handlApiResponse(res.data.data);
      })
      .catch((err) => {
        errorMessage(err?.response?.data?.message);
      });
  };
  const handleLoginWithGoogle = (token) => {
    axios
      .post(`${API_URL}/auth/login-with-google`, {
        googleToken: token,
      })
      .then((res) => {
        Cookies.set("token", `${res?.data?.data?.token}`, { expires: 7 });
        localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        errorMessage(err?.response?.data?.message);
      });
  };
  return {
    handleSignupApi,
    handleVerifyEmail,
    handleLoginApi,
    handlePasswordResetApi,
    handleUpdateProfile,
    handleDashboardStat,
    handleLoginWithGoogle,
  };
};

export default HttpRequest;
