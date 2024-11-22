import { useState } from "react"

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*const handleChange = (e) => {
        /*const [name, value] = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();

        email.trim() || !username.trim() || password.trim() ?
            console.error("Invalid details") : console.log("Success in validation and login");
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Uname">Username</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </form>
    )
}

export default RegistrationForm