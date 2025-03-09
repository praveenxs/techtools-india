import React from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import dark_arrow from '../../assets/dark_arrow.png';

function Carousel() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <div className='section section1 container1'>
                    <div className='swiper-cnt'>
                        <h4>SOLUTION FOR ALL TYPE OF TOOLS</h4>
                        <h2>High-Quality Industrial Tools & Equipment</h2>
                        <div>
                            Discover our premium range of industrial tools and equipment. 
                            Designed for durability and performance to meet all your industrial needs.
                        </div>
                        <div className='btn-exp'>
                            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='section section2 container1'>
                    <div className='swiper-cnt'>    
                        <h4>TRUST US FOR RELIABLE OFFICE SOLUTIONS</h4>
                        <h2>Upgrade Office With Premium Stationery & Equipment</h2>
                        <div>
                            With our deep industry insight and unwavering commitment to customer 
                            satisfaction, rely on us to deliver top-notch office supply solutions.
                        </div>
                        <div className='btn-exp'>
                            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='section section3 container1'>
                    <div className='swiper-cnt'>
                        <h4>YOUR SAFETY, OUR PRIORITY</h4>
                        <h2>Protecting Workplaces With Top-Quality Gear</h2>
                        <div>
                            With our extensive industry knowledge and dedication to customer satisfaction, 
                            you can trust us to deliver the safety solutions.
                        </div>
                        <div className='btn-exp'>
                            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='section section4 container1'>
                    <div className='swiper-cnt'>
                        <h4>DISCOVER DEPENDABLE CLEANING PRODUCTS HERE</h4>
                        <h2>Discover Trusted Brand's Best Cleaning Products.</h2>
                        <div>
                            We understand that every customer has different preferences and budget constraints, 
                            which is why we strive to provide options that cater to all needs and budgets.
                        </div>
                        <div className='btn-exp'>
                            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
                        </div>
                    </div>  
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Carousel;
