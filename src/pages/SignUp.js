import React from 'react'
import { TextField, Button, Container, Typography, Card, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";

import { signUpSchema } from "../schemas";


const SignUp = () => {
    const initialValues = {
        name:"",
        email: "",
        password: "",
        confirmpassword:""
    };
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
        initialValues,
        validationSchema: signUpSchema,
        //// By disabling validation onChange and onBlur formik will validate on submit.
        onSubmit: (values, action) => {
            console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
            //// to get rid of all the values after submitting the form
            
            action.resetForm();
            //navigate('/formtable');
        },
    });

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Container maxWidth="xs" sx={{ marginTop: 12 }}>
            <Card sx={{ minWidth: 275, padding: 4, boxShadow: '0px 4px 20px rgba(0, 3, 2, 1)' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                    />
                    {errors.name && touched.name ? (
                        <Typography  className="form-error" sx={{color:'red'}}>{errors.name}</Typography >
                    ) : null}
                     <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                    />
                    {errors.email && touched.email ? (
                        <Typography  className="form-error" sx={{color:'red'}}>{errors.email}</Typography >
                    ) : null}
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                    />
                    {errors.password && touched.password ? (
                        <Typography  className="form-error" sx={{color:'red'}}>{errors.password}</Typography >
                    ) : null}
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        name="confirmpassword"
                        id="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (
                        <Typography  className="form-error" sx={{color:'red'}}>{errors.confirmpassword}</Typography >
                    ) : null}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        style={{ marginTop: '1rem' }}
                    >
                        Sign Up
                    </Button>
                    <p>Go to <Link onClick={handleClick} sx={{cursor:'pointer'}}>Login</Link> Page</p>
                </form>
            </Card>
        </Container>
    )
}

export default SignUp