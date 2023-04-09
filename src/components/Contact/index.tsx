import React, { useState } from "react";
import "./index.css";

interface ContactFormProps {
    onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: { [key: string]: string } = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            onSubmit(formData);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <span className="title animated-heading contact-title">Contact us</span>
            <div className="contact-header">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? "input-error" : ""}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
            </div>

            <div className="form-group-textarea">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && (
                    <p className="error-message">{errors.message}</p>
                )}
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default ContactForm;
