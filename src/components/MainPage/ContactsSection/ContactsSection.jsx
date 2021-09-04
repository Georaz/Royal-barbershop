import 'leaflet/dist/leaflet.css';
import c from './ContactsSection.module.css';
import MapWrapper from "./MapWrapper";

const ContactsSection = () => {
    return (
        <section>
            <div className={c.headingWrapper}>
                <h2 className={c.heading}>Наши контакты</h2>
            </div>
            <div className={c.contactsContainer}>
                <div className={c.contentWrapper}>
                    <div className={c.textWrapper}>
                        <div className={c.text}>
                            <p className={c.address}>Ул. Кронверкская, д. 8</p>
                            <p><a className={c.phone} href="tel:88123250854">8 (812) 325-08-54</a></p>
                            <p><a className={c.email} href="mailto:info@barberoyal.ru">info@barberoyal.ru</a></p>
                            <p className={c.schedule}>Работаем с 9.00 до 22.00<br/> без выходных</p>
                        </div>
                        <div className={c.socialMedia}>
                            <a className={c.vk} href="https://vk.com/"> </a>
                            <a className={c.facebook} href="https://ru-ru.facebook.com/"> </a>
                            <a className={c.instagram} href="https://www.instagram.com/?hl=ru"> </a>
                        </div>
                    </div>
                    <div className={c.mapContainer}>
                        <MapWrapper/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsSection;