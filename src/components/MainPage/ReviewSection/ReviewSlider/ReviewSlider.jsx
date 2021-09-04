import c from './ReviewSlider.module.css';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

const ReviewSlider = (props) => {
    const slides = props.comments;
    return (
        <>
            <Swiper
                tag="section"
                wrapperTag="ul"
                id="main"
                autoplay
                spaceBetween={0}
                slidesPerView={1}
            >
                {
                    slides.map(slide => (
                        <SwiperSlide key={`slide-${Date.now()}`} tag="li">
                            <div className={c.avatarWrapper}>
                                <img src={slide.avatar} width="150" height="150" alt=""/>
                            </div>
                            <div className={c.textWrapper}>
                                <b className={c.name}>{slide.name}</b>
                                <p className={c.slideText}>{slide.text}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default ReviewSlider;