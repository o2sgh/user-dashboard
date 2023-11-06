export const mainContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
export const mainFormContainer = {
  backgroundColor: "#4F5477",
  width: "30%",
  minHeight: "200px",
  marginTop: "10px",
  padding: "30px 20px",
  borderRadius: 2,
};
export const textField = {
  width: "100%",
  input: {
    color: "white",
    fontFamily: "Poppins",
    backgroundColor: "#686C8A",
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
      //   borderColor: "#585562",
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
    color: "white",
  },
};
export const body_label = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "14px",
    color: "white",
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
    color: "white",
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
    backgroundColor: "white !important",
    // backgroundColor: "#E76439 !important",
    borderRadius: 1,
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "black",
    textTransform: "capitalize",
    width:"200px"
  },
};
