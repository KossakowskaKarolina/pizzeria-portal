import React from 'react';
import styles from './Login.module.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Login = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.component}>
      <Container maxWidth='sm' sx={{ p: 10}}>
        <Stack>
          <FormControl sx={{ m: 1, width: '25ch', mx: 'auto' }} variant='standard'>
            <InputLabel>Login</InputLabel>
            <Input
              value={values.login}
              endAdornment={<InputAdornment position='end'> <AccountCircle /></InputAdornment>}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', mx: 'auto' }} variant='standard'>
            <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
            <Input
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton sx={{p: 0}}
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant='contained' sx={{ m: 1, width: '25ch', mx: 'auto' }}
            component={ Link } to={process.env.PUBLIC_URL + '/'}
          >Login</Button>
        </Stack>
      </Container>
    </div>
  );
};
export default Login;
