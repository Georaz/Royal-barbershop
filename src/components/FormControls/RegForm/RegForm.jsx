import React from 'react';
import c from '../FormControls.module.css';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import "yup-phone";
import TitleBackground from "../../TitleBackground/TitleBackground";
import {NavLink} from "react-router-dom";

const RegForm = () => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        surname: yup.string().typeError('Должно быть строкой'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
        phone: yup.string().phone('RU', true, 'Номер некорректный').required('Обязательно'),
        email: yup.string().email('Введите верный email')
    })
    return (
        <TitleBackground>
            <div className={c.regFormWrapper}>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        password: '',
                        passwordConfirm: '',
                        phone: '',
                        email: ''
                    }}
                    validationSchema={validationsSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <Form className={c.regForm}>
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
                                <label htmlFor="surname">Фамилия:</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="text"
                                    name="surname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.surname}
                                />
                            </div>
                            {touched.surname && errors.surname && <p className={c.errorMessage}>{errors.surname}</p>}
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
                            <div>
                                <label htmlFor="passwordConfirm">Подтвердите пароль:*</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="password"
                                    name="passwordConfirm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                />
                            </div>
                            {touched.passwordConfirm && errors.passwordConfirm &&
                            <p className={c.errorMessage}>{errors.passwordConfirm}</p>}
                            <div>
                                <label htmlFor="phone">Телефон:*</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                            </div>
                            {touched.phone && errors.phone && <p className={c.errorMessage}>{errors.phone}</p>}
                            <div>
                                <label htmlFor="email">E-mail:</label><br/>
                                <Field
                                    className={c.input}
                                    component="input"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            {touched.email && errors.email &&
                            <p className={c.errorMessage}>{errors.email}</p>}
                            <div className={c.regOffer}>
                                Или <NavLink to="/auth">входи</NavLink>
                            </div>
                            <button
                                className={c.button}
                                disabled={!isValid || !dirty}
                                onClick={handleSubmit}
                                type="submit"
                            >Регистрация
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </TitleBackground>
    )
}

export default RegForm;