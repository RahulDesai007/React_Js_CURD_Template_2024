import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(5).required("Please enter your password"),
});

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(5).required("Please enter your password"),
  confirmpassword: Yup.string()
    .required("Please enter password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
