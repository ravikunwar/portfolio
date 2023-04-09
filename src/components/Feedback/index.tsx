import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './index.css'
import { feedbacks } from '../../constant';


function Feedback() {


    return (
        <div className='my'>
            <p className='feedback-title'>
                <span className='title animated-heading'>Clients / Feedbacks</span>
            </p>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}

                    modules={[Autoplay]}
                    className="mySwiper">
                    {
                        feedbacks.map((feed, index) => (
                            <SwiperSlide>
                                <div key={index} className='feedback-card'>
                                    <div className='inner-card'>
                                        <p>{feed.post}</p>
                                        <p className='author'>- {feed.author}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Feedback