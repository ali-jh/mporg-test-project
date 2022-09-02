import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [userProfile, setUserProfile] = useLocalStorage("userProfile", null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleClickShowPassword = () => {
    setFormValue({
      ...formValue,
      showPassword: !formValue.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    setUserProfile(formValue);
    location.reload();
  };

  return (
    <div className={styles.loginform}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={styles.content}>
          <div className={styles.inputfield}>
            <TextField
              id="username"
              label="Username"
              name="username"
              value={formValue.username}
              onChange={handleChange}
              sx={{ m: 1, width: "25ch" }}
            />
          </div>
          <div className={styles.inputfield}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={formValue.showPassword ? "text" : "password"}
                value={formValue.password}
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {formValue.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
