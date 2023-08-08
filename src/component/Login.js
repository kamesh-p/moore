import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";

const Login = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleLogin = () => {
    const matchedUser = user.find(
      (u) => u.username === email && u.password === password
    );

    if (matchedUser) {
      console.log("Login successful");
      dispatch(loginSuccess(matchedUser)); // Dispatch action with user data
      handleClose();
    } else {
      alert("Invalid email or password");
    }
  };

  const user = [
    {
      username: "12345",
      password: "12345",
      Name: "Kamesh",
    },
    {
      username: "kishore_123@gmail.com",
      password: "Kishore!@#",
      Name: "Kishore",
    },
    {
      username: "Adithya_123@gmail.com",
      password: "Adithya!@#",
      Name: "Adithya",
    },
    {
      username: "Aryaman_123@gmail.com",
      password: "Aryaman!@#",
      Name: "Aryaman",
    },
  ];

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email and password to login.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/Signup">
            <Button>New User?</Button>
          </Link>
        </DialogContent>
        <DialogActions>
          <Link to="/about">
            <Button onClick={handleClose}>Cancel</Button>
          </Link>
          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
