import { toast } from "react-toastify";


export const showSuccessMessage = (msg = "Success...") => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
    });
};

export const showErrorMessage = (msg = "Error...") => {
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
    });
};