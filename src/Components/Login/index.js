import React from 'react';
import { Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin } from 'react-google-login';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircleItem from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: 250,
  },
  textContent:{
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  btn : {
    marginTop: 5,
    margin: '0 auto',
  }
}));

function LoginUser(data){
    return{type: 'LOGIN', data}
}

export default function Login() {
    const data = useSelector(response => response)
    const dispatch = useDispatch();
    const classes = useStyles();
    const responseGoogle = (response) => {
        const userData = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            image: response.profileObj.imageUrl
        }
        dispatch(LoginUser(userData))
    }
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        email: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    function handleLogin(){
        const userData = {
            name: 'Jane Doe',
            email: values.email,
            image: 'J'
        }
        dispatch(LoginUser(userData));
    }
    // if(data.login === true){return <Redirect to={"/Home"} />}
    return (
        <div className="App">
            <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Login with Google
            </Typography>
            <Typography component="p">
            <GoogleLogin
                clientId="" //client ID here
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </Typography>
            <div className={classes.textContent}>
                <TextField
                    id="outlined-adornment-email"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <AccountCircleItem/>
                        </InputAdornment>
                    ),
                    }}
                />
                <TextField
                id="outlined-adornment-password"
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                type={values.showPassword ? 'text' : 'password'}
                label="Password"
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        edge="end"
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
                <Button color='primary' variant='contained' className={classes.btn} onClick={handleLogin}>Login</Button>
            </div>
            </Paper>
        </div>
    );
}

