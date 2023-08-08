import React, { useState,useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {TextField,Button, FormHelperText} from '@mui/material';
import './form.css'
import {Formik,Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const Login = (props) => {
    const [userDetails,setUserDetails] = useState({name:'',email:'',password:''});
    // chagne name whith user entered in the text box
    useEffect(()=>{

    },[])
    const handleSubmit = (values)=>{
        console.log(values);
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("name not be empty"),
        email: Yup.string().email().required("email should be valid"),
        password: Yup.string().required("password should be valid")
    });

    return (<>
        <div className="form">
            <Formik initialValues={{name:'',email:'',password:''}}
            onSubmit={(values)=>{handleSubmit(values)}}
            validationSchema={validationSchema}>
                {({values,errors,setFieldValue,handleBlur}) =>{
                    return <>
                    <Form>
                <TextField error={errors.name} variant="standard" onBlur={handleBlur} label="name" name="name" onChange={(e)=>{setFieldValue("name",e.target.value)}} placeholder={values.name}/>
                <FormHelperText error><ErrorMessage name="name"/></FormHelperText>
                <TextField error={errors.name} variant="outlined" onBlur={handleBlur} label="Email" name="email" type="email" onChange={(e)=>{setFieldValue("email",e.target.value)}}  placeholder={values.email} />
                <FormHelperText error><ErrorMessage name="email"/></FormHelperText>
                <TextField error={errors.name} variant="filled" onBlur={handleBlur} label="Password" name="password" onChange={(e)=>{setFieldValue("password",e.target.value)}}  type="password" />
                <FormHelperText error><ErrorMessage name="password"/></FormHelperText>
                <Button type="submit">Submit</Button>
                </Form>
            <p>Hello :- {values.name}</p>
            <p>Email :- {values.email}</p>
            </>
                }}
            </Formik>
        </div>
    </>);
}

export default Login;