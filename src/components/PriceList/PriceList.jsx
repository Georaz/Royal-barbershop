import React from 'react';
import c from './PriceList.module.css';
import AppLogo from "../AppLogo/AppLogo";
import Service from "./Service/Service";
import TitleBackground from "../TitleBackground/TitleBackground";

const PriceList = () => {

    const services = [
        {
            title: 'Уход за кожей/ногтями',
            subtitle: 'от 500 рублей',
            features: ['маникюр', 'педикюр', 'коррекция формы', 'парафинотерапия'],
            link: 'skin-nail-care'
        },
        {
            title: 'Фирменная стрижка',
            subtitle: 'от 700 рублей',
            features: ['стрижка модельная', 'стрижка MOZER', 'стрижка "Берсерк"', 'стрижка "Варяг"'],
            link: 'haircut'
        },
        {
            title: 'Бритьё',
            subtitle: 'от 600 рублей',
            features: ['машинкой', 'опасным лезвием', 'классическое', 'королевское'],
            link: 'shaving'
        }
    ]

    return (
        <section>
            <TitleBackground>
                <AppLogo/>
                <div className={c.pricelistContainer}>
                    <h2 className={c.heading}>Услуги и цены</h2>
                    <div className={c.serviceWrapper}>
                        {
                            services.map(service => (
                                <Service
                                    title={service.title}
                                    subtitle={service.subtitle}
                                    features={service.features}
                                    link={service.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </TitleBackground>
        </section>
    )
}

export default PriceList;
