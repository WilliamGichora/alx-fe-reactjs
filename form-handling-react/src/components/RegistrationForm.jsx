import { useState } from "react"

function RegistrationForm() {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const [name, value] = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        !formData.email.trim() || !formData.username.trim() || !formData.password.trim() ?
            console.error("Invalid details") : console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Uname">Username</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </form>
    )
}

export default RegistrationForm