import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinRequest } from "../api/api";
import { useAuth } from "../context/AuthContext";

function Signin() {
    const [values, setValues] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const data = await signinRequest(values);
            if (data.error) {
                setError(data.error);
            } else {
                login(data);
                navigate("/");
            }
        } catch (err) {
            setError("Could not reach the server");
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
