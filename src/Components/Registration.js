import React, { Component } from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
// import { withRouter } from "react-router";

const regForName = RegExp(/[A-Z][a-z]*.{3,}/);
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForUname = RegExp(/^[a-z0-9_.]+$/);
const regForPass = RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
);

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      uname: "",
      email: "",
      password: "",
      errors: {
        fname: "",
        lname: "",
        uname: "",
        email: "",
        password: "",
      },
    };
  }

  onChangeUser = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
        case 'username':
            errors.username = (regForEmail.test(value) || regForUname.test(value)) ? '' : 'Username is not valid';
            break;
        case 'password':
            errors.password = regForPass.test(value) ? '' : 'Password must be 8 - 16 characters long and only have :  at least a symbol, upper and lower case letters and a numbers';
            break;
        default:
            alert('Some fields are not declared..');
    }
    this.setState({ [name]: value })
}
  // componentDidMount()
  // {

  // }

  Register() {
    axios.post("http://localhost:3001/Users", this.state).then((resp) => {
      console.log(resp);
    });
  }

  render() {
    return (
      <Grid>
        <Paper
          elevation={10}
          style={{
            padding: "20px",
            height: "70vh",
            margin: "170px auto",
            width: "500px",
          }}
        >
          <Grid align="center">
            <Avatar className="bg-success font">
              <LockOutlinedIcon />
            </Avatar>
            <h2> Registration Form</h2>
          </Grid>
          <TextField
            label="Firstname"
            placeholder="Enter first name"
            variant="standard"
            fullWidth
            required
            onChange={(event) => this.setState({ fname: event.target.value })}
          />

          <TextField
            label="Lastname"
            placeholder="Enter last name"
            variant="standard"
            fullWidth
            required
            onChange={(event) => this.setState({ lname: event.target.value })}
          />

          <TextField
            label="Username"
            placeholder="Enter user name"
            variant="standard"
            fullWidth
            required
            onChange={(event) => this.setState({ uname: event.target.value })}
          />

          <TextField
            label="Email"
            placeholder="Enter user email"
            variant="standard"
            fullWidth
            required
            onChange={(event) => this.setState({ email: event.target.value })}
          />

          <TextField
            label="Password"
            placeholder="Enter user password"
            type="password"
            variant="standard"
            fullWidth
            required
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />

          <TextField
            label="Confirm password"
            type="password"
            variant="standard"
            fullWidth
            required
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="mt-4"
            fullWidth
            onClick={() => {
              this.Register();
            }}
          >
            Sign In
          </Button>
        </Paper>
      </Grid>
    );
  }
}

export default Registration;
