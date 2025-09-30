import {getContactFormParams} from "./api.js";

export function handleSendContactForm() {
    const data = getContactFormParams();
    console.log(data);
}