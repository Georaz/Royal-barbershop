import React from 'react';
import c from './TitleBackground.module.css';

const TitleBackground = (props) => {
    return (
        <section>
            <div className={c.BackgroundContainer}>
                {props.children}
            </div>
        </section>
    )
}

export default TitleBackground;