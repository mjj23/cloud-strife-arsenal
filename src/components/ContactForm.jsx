import { Toaster, toast } from "react-hot-toast";
import "./ContactForm.css";

function ContactForm() {
    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/mjohnsonps4@gmail.com",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (response.ok) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Message could not be sent.");
            }
        } catch {
            toast.error("Something went wrong.");
        }
    }

    return (
        <section className="contact-section">
            <Toaster position="bottom-center" />

            <p className="section-label">Contact</p>
            <h2>Contact Me</h2>

            <p>
                Have a question about Cloud's weapons or the site?
                Send a message below.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default ContactForm;