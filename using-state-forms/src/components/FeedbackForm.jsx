import React, { useState } from "react";
import "./FeedbackForm.css";
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value,}));
    };
    return (
        <div>
            <form>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Feedback:
                    <textarea 
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        maxLength="200"
                    />
                </label>
            </form>
            <h2>Preview</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Feedback: {formData.feedback}</p>
        </div>
    );
}

export default FeedbackForm;