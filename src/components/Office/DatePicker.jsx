import c from './DatePicker.module.css';
import {Formik, Form, Field} from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useEffect} from "react";
import * as yup from "yup";
import ru from 'date-fns/locale/ru';
import {addDays} from "date-fns";
import close from '../../images/close.svg';

const timeSelect = ['Буду к...', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30'];

const serviceSelect = ['Выбираю...', 'Уход за кожей/ногтями', 'Фирменная стрижка', 'Бритьё'];

const DatePicker = (props) => {
    useEffect(() => {
        return props.assignment.length === 3 ? props.assignLimit() : props.assignPossible()
    }, [props])

    const validationsSchema = yup.object().shape({
        date: yup.date().required('Необходимо выбрать дату').nullable(),
        time: yup.string().required('Обязательно'),
        service: yup.string().required('Обязательно')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    service: ''
                }}
                validationSchema={validationsSchema}
                onSubmit={values => {
                    props.assign((values.date.getDate() + ' ' + props.monthsSwitch(values.date.getMonth())), values.time, values.service);
                    props.assignSort();
                }
                }>
                {({values, errors, touched, dirty}) => (
                    <Form className={c.datePickerForm}>
                        <div className={c.datePickerTitle}>
                            <b className={c.datePickerText}>Записаться к нам</b>
                            <svg height="25px" viewBox="0 -1 401.523 401" width="25px"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0"/>
                                <path
                                    d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 00-2.566 4.402l-23.461 84.7a9.997 9.997 0 0012.304 12.308l84.7-23.465a9.997 9.997 0 004.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348L302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875l37.62 37.625-52.038 14.418zM374.223 74.676L363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0"/>
                            </svg>
                        </div>
                        <div className={c.dateItems}>
                            <Field name="date" component="input">
                                {({form, field}) => {
                                    const {setFieldValue} = form
                                    const {value} = field
                                    return <DateView
                                        id="date"
                                        {...field}
                                        selected={value}
                                        onChange={val => setFieldValue("date", val)}
                                        minDate={new Date()}
                                        maxDate={addDays(new Date(), 21)}
                                        disablePast
                                        locale={ru}
                                        dateFormat={'dd.MM.yyyy'}
                                        placeholderText={'Выбираю день'}
                                    />
                                }}
                            </Field>
                        </div>
                        {!touched.date && errors.date && <p className={c.errorMessage}>{errors.date}</p>}
                        <div className={c.dateItems}>
                            <label htmlFor="time">Выбрать время:</label><br/>
                            <Field name="time"
                                   id="time"
                                   as="select"
                                   value={values.time}
                                   className={c.select}
                            >
                                {
                                    timeSelect.map((option, index) => {
                                            return (
                                                <option key={(index + Math.random()).toFixed(3)}
                                                        value={option}
                                                >{option}</option>)
                                        }
                                    )
                                }
                            </Field>
                        </div>
                        {!dirty.time && errors.time && <p className={c.errorMessage}>{errors.time}</p>}
                        <div className={c.dateItems}>
                            <label htmlFor="service">Выбрать услугу:</label><br/>
                            <Field name="service"
                                   id="service"
                                   as="select"
                                   value={values.service}
                                   className={c.select}
                            >
                                {
                                    serviceSelect.map((service, index) => {
                                            return (
                                                <option key={(index + Math.random()).toFixed(3)}
                                                        value={service}
                                                >{service}</option>)
                                        }
                                    )
                                }
                            </Field>
                        </div>
                        {!dirty.service && errors.service && <p className={c.errorMessage}>{errors.service}</p>}
                        {
                            props.isAssignable === true
                                ? <button className={c.assignSubmit} id="assignSubmit" type="submit">Записаться</button>
                                : <button className={c.assignSubmit} id="assignSubmit" type="submit"
                                          disabled>Записаться</button>
                        }

                    </Form>
                )
                }
            </Formik>
            <div>
                <h3 className={c.assignList}>Записи (макс. 3):</h3>
                <div>
                    {
                        props.assignment.map(item => (
                            <div className={c.assignment}>
                                <p className={c.text}>
                                    {item.date} / {item.time} / {item.service}
                                </p>
                                <button onClick={() => props.deleteAssign(item.id)} className={c.closeButton}
                                        type="button">
                                    <img src={close} width="10" height="10" alt=""/></button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default DatePicker;
