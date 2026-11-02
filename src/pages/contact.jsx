import { useState } from "react";
import "./contact.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("Message could not be sent.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Message could not be sent.");
        }
    };

    return (
        <div id="contact" className="page">
            <Toaster />
            <h1>CONTACT US</h1>
            <p>Have a fishing question or suggestion? Send us a message!</p>

            <form onSubmit={sendMessage}>
                <input
                    type="hidden"
                    name="access_key"
                    value="bae47c6d-df6c-41b6-bd85-096b750ea86b"
                />

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
