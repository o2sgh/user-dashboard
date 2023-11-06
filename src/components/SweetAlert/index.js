import Swal from "sweetalert2";
import "./sweetalert.css";
export const successMessage = (message) => {
  Swal.fire("Successfull!", message, "success");
};
export const errorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

