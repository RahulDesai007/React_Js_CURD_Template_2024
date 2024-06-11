import React from 'react'
import { TextField, Button, Container, Typography, Card, Link  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signInData } from "../actions/index"
import { loginSchema } from "../schemas";
import { useSelector, useDispatch } from "react-redux"

const SignIn = () => {
    const initialValues = {
        email: "",
        password: "",
    };
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: (values, action) => {
                console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
                //// to get rid of all the values after submitting the form
                dispatch(signInData(values)).then((response)=>{
                    console.log("response ", response)
                    navigate('/formtable');
                }).catch((error)=>{
                    console.log(error)
                })
               // action.resetForm();
                //
            },
        });

        const handleClick = () => {
            navigate('/signUp');
        }

    return (
        <Container maxWidth="xs" sx={{ marginTop: 12 }}>
            <Card sx={{ minWidth: 275, padding: 4, boxShadow: '0px 4px 20px rgba(0, 3, 2, 1)' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit}>
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        style={{ marginTop: '1rem' }}
                    >
                        Sign In
                    </Button>
                    <p>Not yet registered ? <Link onClick={handleClick} sx={{cursor:'pointer'}}>Register here</Link></p>
                </form>
            </Card>
        </Container>
    )
}

export default SignIn