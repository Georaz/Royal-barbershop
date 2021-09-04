import React from 'react';
import c from '../FormControls.module.css';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import "yup-phone";
import {phoneRegExp} from "../../utils/variables";

const DataForm = (props) => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').min(3, 'Минимум 3 знака'),
        surname: yup.string().typeError('Должно быть строкой'),
        password: yup.string().typeError('Должно быть строкой'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
        phone: yup.string().matches(phoneRegExp, 'Номер некорректный'),
        email: yup.string().email('Введите верный email')
    })
    return (
        <div>
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
                onSubmit={(touched) => {
                    props.changeData(touched)
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <Form className={c.dataForm}>
                        <div className={c.dataChangeTitle}>
                            <b className={c.dataChangeText}>Редактировать форму</b>
                            <svg height="25px" viewBox="0 -1 401.523 401" width="25px"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0"/>
                                <path
                                    d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 00-2.566 4.402l-23.461 84.7a9.997 9.997 0 0012.304 12.308l84.7-23.465a9.997 9.997 0 004.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348L302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875l37.62 37.625-52.038 14.418zM374.223 74.676L363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0"/>
                            </svg>
                        </div>
                        <div className={c.dataInputWrapper}>
                            <label htmlFor="name">Имя:*</label><br/>
                            <Field
                                className={c.input}
                                component="input"
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder={props.name}
                            />
                        </div>
                        {errors.name && <p className={c.errorMessage}>{errors.name}</p>}
                        <div className={c.dataInputWrapper}>
                            <label htmlFor="surname">Фамилия:</label><br/>
                            <Field
                                className={c.input}
                                component="input"
                                type="text"
                                name="surname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surname}
                                placeholder={props.surname}
                            />
                        </div>
                        {touched.surname && errors.surname && <p className={c.errorMessage}>{errors.surname}</p>}
                        <div className={c.dataInputWrapper}>
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
                        <div className={c.dataInputWrapper}>
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
                        <div className={c.dataInputWrapper}>
                            <label htmlFor="phone">Телефон:*</label><br/>
                            <Field
                                className={c.input}
                                component="input"
                                type="phone"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                placeholder={props.phone || 'Формат такой: 89993332211'}
                            />
                        </div>
                        {touched.phone && errors.phone && <p className={c.errorMessage}>{errors.phone}</p>}
                        <div className={c.dataInputWrapper}>
                            <label htmlFor="email">E-mail:</label><br/>
                            <Field
                                className={c.input}
                                component="input"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder={props.email || 'example@mail.ru'}
                            />
                        </div>
                        {touched.email && errors.email &&
                        <p className={c.errorMessage}>{errors.email}</p>}
                        <button
                            className={`${c.button} ${c.dataChangeButton}`}
                            // disabled={!isValid}
                            onClick={handleSubmit}
                            type="submit"
                        >Обновить данные
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DataForm;