import React from 'react';
import c from './Office.module.css';
import DatePickerContainer from "./DatePickerContainer";
import TitleBackground from "../TitleBackground/TitleBackground";
import DataFormContainer from "../FormControls/DataForm/DataFormContainer";
import {Redirect} from "react-router-dom";

const Office = (props) => {
    if (!props.isAuth) return <Redirect to={'/auth'}/>;
    return (
        <section>
            <TitleBackground>
                <div className={c.officeContainer}>
                    <h1 className={c.heading}>{`Ваш Личный кабинет, ${props.name}`}</h1>
                    <div className={c.officeWrapper}>
                        <div className={c.formWrapper}>
                            <DataFormContainer/>
                        </div>
                        <div className={c.datePickerWrapper}>
                            <DatePickerContainer/>
                        </div>
                    </div>
                </div>
            </TitleBackground>
        </section>
    )
}

export default Office;