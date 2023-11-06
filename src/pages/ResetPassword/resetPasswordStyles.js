export const mainContainer = {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection:"column"
  };
  export const mainFormContainer = {
    // backgroundColor: "#4F5477",
    width: "30%",
    minHeight: "200px",
    marginTop: "10px",
    padding: "30px 20px",
    borderRadius: 2,
  };
  export const textField = {
    width: "100%",
    input: {
      color: "#686C8A",
      fontFamily: "Poppins",
    //   backgroundColor: "#686C8A",
      border: "1px solid #686C8A",
      borderRadius: 3,
      height: "10px",
    },
    label: {
      color: "green",
      fontFamily: "Poppins",
    },
    "&.css-v4u5dn-MuiInputBase-root-MuiInput-root": {
      borderBottom: "1px solid white !important",
    },
    "& .MuiOutlinedInput-root": {
      height: "50px",
  
      "& fieldset": {
        fontFamily: "Poppins",
        border: "none",
        borderRadius: 2,
        height: "10px",
      },
      "& label": {
        color: "red",
      },
      "&:hover fieldset": {
        borderColor: "#585562",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#585562",
      },
    },
  };
  export const body_heading = {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "24px",
      color: "#686C8A",
    },
  };
  export const body_label = {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "14px",
      color: "#686C8A",
    },
  };
  export const body_link = {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "14px",
      color: "#686C8A",
      textDecoration:"underline",
      cursor:"pointer"
    },
  };
  export const displayBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    mt: 2,
    width: "100%",
  };
  export const body_text = {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "14px",
      color: "#686C8A",
      mt: 3,
    },
  };
  
  export const body_error = {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      color: "#E76439",
    },
  };
  
  export const submitButtons = {
    "&.MuiButton-root": {
      backgroundColor: "#686C8A !important",
      borderRadius: 1,
      fontWeight: 500,
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "white",
      textTransform: "capitalize",
      width: "210px",
    },
  };
  export const submitButtonsTwo = {
    "&.MuiButton-root": {
      backgroundColor: "#686C8A !important",
      borderRadius: 1,
      fontWeight: 500,
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "white",
      textTransform: "capitalize",
      width: "150px",
    },
  };
  export const submitButtonsEdit = {
    "&.MuiButton-root": {
      backgroundColor: "#E76439 !important",
      borderRadius: 1,
      fontWeight: 500,
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "white",
      textTransform: "capitalize",
      width: "150px",
    },
  };
  