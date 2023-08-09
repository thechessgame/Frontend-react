import ContactUs from "../components/ContactUs/ContactUs";
import api from "../util/api";

const ContactusPage = () => {
    return <ContactUs />;
};

export default ContactusPage;

export async function action({ request }) {
    console.log("Call...")
    const data = await request.formData();
    let email = data.get('email')
    let fname = data.get('fname')
    let comment = data.get('comment');

    let response = {
        msg: "There is something went wrong!",
        error: true
    }

    // api call
    try {
        await api.submitRequest({
            name: fname,
            email,
            comment
        })
        return {
            msg: "Request submitted successfully",
            error: false
        }
    } catch (error) {
        if (error?.response?.data?.error) {
            response.msg = error?.response?.data?.error
        }
        else if (error.message) {
            response.msg = error?.response?.data?.error
        }
    }

    return response
}