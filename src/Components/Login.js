
import React, { Component } from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForUname = RegExp(/^[a-z0-9_.]+$/);
const regForPass = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empData:[],
      username:"",
      password: "",
      // loggedIn,
      errors:{
        username:"",
        password: "",
      }
     
    };
    
  }
  componentDidMount()
  {
    const URL = "http://localhost:3001/Users"
        axios.get(URL)
            .then(res => {

                this.setState({
                    empData: res.data
                })

            })
            .catch(err => {
                console.log(err)
            })
  }
 
  login=()=> {
    
     

    if (this.validate(this.state.errors)) {
        let getSearch = this.state.empData.filter(item => (this.state.username === item.uname) && this.state.password === item.password)
        const loggId = getSearch.map(item => item.id)
        if (getSearch.length > 0) {
            alert("Logged In Successfully!!");
            this.props.history.push("/home");
            localStorage.setItem("token", loggId)
            //console.log(getSearch)
            this.setState({
                empData: getSearch,
                loggedIn: true,
            })
        }
        else {
            alert("Sorry! Credentials doesn't Match.. Try Again or Please SignUP! ");
        }
    }
    else {
        alert("Invalid Credentials, try again !!");
        let errors = { username: '', password: '' }
        this.setState({
            errors: errors
        })
    }
    
    }
    validate = (errors) => {
      let valid = true;
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
      return valid;
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
  onSubmitButton = (e) => {
    
}

// Validating Validations



      
        // if (resp.length > 0) {
        //   this.props.history.push("/home");
        // } else {
        //   alert("please check username and password");
        // }
     

  render() {
      // If LoggedIn then Redirecting to the Dashboard

      if (this.state.loggedIn) {

        return <Link to="/home" />
    }

    return (
      <Grid>
        <Paper
          elevation={10}
          style={{
            padding: "20px",
            height: "55vh",
            margin: "170px auto",
            width: "280px",
          }}
        >
          <Grid align="center">
            <Avatar className="bg-success font">
              <LockOutlinedIcon />
            </Avatar>
            <h2> Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter use name"
            variant="standard"
            fullWidth
            required
            name="username"
            onChange={this.onChangeUser} required
            // onChange={(event) => this.setState({ email: event.target.value })}
          />
          <small>{this.state.errors.username}</small>
          <TextField
            label="Password"
            placeholder="Enter use password"
            type="password"
            variant="standard"
            fullWidth
            required
            name="password"
            onChange={this.onChangeUser} required
            // onChange={(event) =>
            //   this.setState({ password: event.target.value })
            // }
          />
          <small>{this.state.errors.password}</small>
          <div className="mt-4" align="center">
          <Link to="/Registration">Register</Link>
          </div>
         
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="mt-4"
            fullWidth
            onClick={() => {
              this.login();
            }}
          >
            Sign In
          </Button>
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(Login);
