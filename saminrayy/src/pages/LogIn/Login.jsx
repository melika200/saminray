import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import NavbarItem from "../../components/Navbar/NavbarItem";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const okay = useNavigate();
  const submitHandler = () => {
    if (username == "admin" && password == "12345") {
      okay("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "شما پسورد را اشتباه وارد کردید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };
  return (
    <>
      <NavbarItem />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button type="button" onClick={submitHandler}>
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
