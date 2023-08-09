import React from "react";
import { ToastContainer, toast } from "react-toastify";


function ErrorandSuccess(props) {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return <ToastContainer />;
}
export default ErrorandSuccess;
