import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import c from '../FormControls.module.css';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import TitleBackground from "../../TitleBackground/TitleBackground";
import {Popup} from "../Popup/Popup";

const AuthForm = (props) => {
    if (props.isAuth) return <Redirect to={"/office"}/>
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })
    return (
        <TitleBackground>
            <div className={c.authFormWrapper}>
                <Formik
                    initialValues={{
                        name: '',
                        password: ''
                    }}
                    validationSchema={validationsSchema}
                    onSubmit={(values) => {
                        values.name === props.userData.name && values.password === props.userData.password
                            ? props.authSuccess() : props.showPopup()
                    }}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                        <Form className={c.authForm}>
                            <div>
                                <label htmlFor="name">Имя:*</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            {touched.name && errors.name && <p className={c.errorMessage}>{errors.name}</p>}
                            <div>
                                <label htmlFor="password">Пароль:*</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            {touched.password && errors.password && <p className={c.errorMessage}>{errors.password}</p>}
                            <div className={c.regOffer}>
                                Или <NavLink to="/registration">регистрируйся</NavLink>
                            </div>
                            <button
                                className={c.button}
                                disabled={!isValid}
                                onClick={handleSubmit}
                                type="submit"
                            >Войти
                            </button>
                            {props.correctData === false ? <Popup {...props} /> : null}
                        </Form>
                    )}
                </Formik>
            </div>
        </TitleBackground>
    )
}

export default AuthForm;