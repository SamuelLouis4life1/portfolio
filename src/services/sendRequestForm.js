// import api from "./api";
let post = "";

export const sendRequestForm = (formRequest) => {
    let { subject, name, document, phone, email, message, termAcceptance } = formRequest;

    return post(
        `/Customer/RequestFormLGPD`,
        {
            subject: Number(subject),
            name: name,
            document: document,
            phone: `55` + phone.replace(/[^0-9]+/g, ""),
            email: email,
            message: message,
            termAcceptance: termAcceptance
        },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }

    )
}