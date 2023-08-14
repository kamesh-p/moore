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
import {
  FormControlLabel,
  FormControl,
  Radio,
  Checkbox,
  InputLabel,
  RadioGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";

// import { Email, Lock } from '@mui/icons-material';

// import LockOpenIcon from '@mui/icons-material/LockOpen';

import { Form, Link } from "react-router-dom";

import axios from "axios";

import { useDispatch } from "react-redux";

import { loginSuccess } from "../store/authSlice";

const Login = () => {
  const [open, setOpen] = useState(true);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleClose();
  };

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    //logic to handle the login process.

    e.preventDefault();

    //Method 1

    // axios.get("http://localhost:4000/users/")

    // .then(response =>{const responseData = response.data

    //   for (let i = 0; i< responseData.length; i++) {

    //     if (responseData[i].email === email && responseData[i].password === password) {

    //           console.log("Credentials Match")

    //           dispatch(loginSuccess(responseData));

    //           handleClose();

    //           break;

    //     }else{

    //       alert("Invalid Credentials")

    //     }

    //   }

    // // console.log(typeof(responseData[0].email));

    // }).catch(error=>{

    //   console.error('Error: ', error);

    // })

    axios
      .post("http://localhost:4000/users/login-check", {
        email: email,
        password: password,
      })

      .then((result) => {
        const resultData = result.data;

        // if(result.status==="Success"){

        //    console.log("Great work")

        // }

        console.log(resultData);
        console.log("name", resultData.Users);
        console.log("name__", resultData.Users.name);

        if (resultData.message === "Login successful") {
          dispatch(loginSuccess(resultData));

          handleClose();
        }
      })

      .catch((err) => console.log(err));

    if (password.length < 6) {
      alert("Password should be greater than 8 characters");
    }

    if (!email.includes("@")) {
      alert("email should contain @");
    }

    // console.log('Email:', email);

    // console.log('Password:', password);
  };
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const user = useSelector((state) => state.auth.user);

  const MAX_SELECTED_LANGUAGES = 1;

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.name;

    if (selectedLanguages.includes(selectedLanguage)) {
      setSelectedLanguages((prevSelected) =>
        prevSelected.filter((lang) => lang !== selectedLanguage)
      );
    } else if (selectedLanguages.length < MAX_SELECTED_LANGUAGES) {
      setSelectedLanguages((prevSelected) => [
        ...prevSelected,
        selectedLanguage,
      ]);
    }
  };

  const MAX_SELECTED_GENRES = 1;

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.name;

    if (selectedGenres.includes(selectedGenre)) {
      setSelectedGenres((prevSelected) =>
        prevSelected.filter((genre) => genre !== selectedGenre)
      );
    } else if (selectedGenres.length < MAX_SELECTED_GENRES) {
      setSelectedGenres((prevSelected) => [...prevSelected, selectedGenre]);
    }
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };
  const handleEduChange = (event) => {
    setSelectedEducation(event.target.value);
  };
  console.log("user", user);
  const handleNextClick = (event) => {
    event.preventDefault();
    const selectedItems = {
      user: user,
      language: selectedLanguages,
      genre: selectedGenres,
      education: selectedEducation,
      format: selectedFormat,
    };

    console.log("gen", selectedItems);
    axios
      .post("http://localhost:4000/genre/create-user", selectedItems)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <div>
        <Dialog open={open}>
          <DialogTitle>Login</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Please enter your email and password to login.
            </DialogContentText>

            <form onSubmit={handleLogin}>
              <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* <Email/> */}

              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>

            {/* <LockOpenIcon/> */}

            <Link to="/signup">
              <Button>New User?</Button>
            </Link>
          </DialogContent>

          <DialogActions>
            <Link to="/about">
              <Button>Cancel</Button>
            </Link>

            <Button type="submit" onClick={handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
        <div className="preference-form">
          <div className="form-box">
            <div className="form-section">
              <h3>Language</h3>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLanguages.includes("Eng")}
                      onChange={handleLanguageChange}
                      name="Eng"
                    />
                  }
                  label="Eng"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLanguages.includes("Tamil")}
                      onChange={handleLanguageChange}
                      name="Tamil"
                    />
                  }
                  label="Tamil"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLanguages.includes("Hindi")}
                      onChange={handleLanguageChange}
                      name="Hindi"
                    />
                  }
                  label="Hindi"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLanguages.includes("French")}
                      onChange={handleLanguageChange}
                      name="French"
                    />
                  }
                  label="French"
                />
              </FormControl>
            </div>

            <div className="form-section">
              <h3>Genre</h3>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedGenres.includes("Fiction")}
                      onChange={handleGenreChange}
                      name="Fiction"
                    />
                  }
                  label="Fiction"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedGenres.includes("Thriller")}
                      onChange={handleGenreChange}
                      name="Thriller"
                    />
                  }
                  label="Thriller"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedGenres.includes("Sci-Fic")}
                      onChange={handleGenreChange}
                      name="Sci-Fic"
                    />
                  }
                  label="Sci-Fic"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedGenres.includes("Romance")}
                      onChange={handleGenreChange}
                      name="Romance"
                    />
                  }
                  label="Romance"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedGenres.includes("Non-Fictional")}
                      onChange={handleGenreChange}
                      name="Non-Fictional"
                    />
                  }
                  label="Non-Fictional"
                />
              </FormControl>
            </div>

            <div className="form-section">
              <h3>Education</h3>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={handleEduChange}
                >
                  <FormControlLabel
                    value="Engineering"
                    control={<Radio />}
                    label="Engineering"
                  />
                  <FormControlLabel
                    value="Medicine"
                    control={<Radio />}
                    label="Medicine"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="form-section">
              <h3>Format</h3>
              <FormControl>
                <InputLabel>Format</InputLabel>
                <Select value={selectedFormat} onChange={handleFormatChange}>
                  <MenuItem value="Hardcover">Hardcover</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={handleNextClick}
            >
              <Link to="/login">Submit</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  };
};
export default Login;
