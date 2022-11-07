import { useNavigate } from "react-router-dom";

export default function NewsLetter() {
    const navigate = useNavigate()

    const handleClick = () => {
        alert("You have successfully signed up!")
        navigate("/")
    }
    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={handleClick}>Sign me up for hourly updates!</button>
        </section>

    );
  };