import React, {useEffect, useState} from 'react'
import {
  StyledIntro,
  StyledCard,
  StyledActivities,
  StyledActivitiesCard,
  StyledSell,
} from './style'
import {Card, Col, Row} from 'antd'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const Sell = () => {
  const data = [
    {
      title: 'GOLDEN CROWN Hải Phòng',
      url: require('../../Images/Vi-tri-du-an-Golden-Crown-Hai-Phong-toa-lac-tai-Nga-tu-Le-Hong-Phong-va-Nguyen-Binh-Khiem-Dang-Hai-Hai-An-TP-Hai-Phong-1.jpg'),
    },
    {
      title: 'Phát triển dự án',
      url: require('../../Images/Phat-trien-du-an.jpg'),
    },
    {
      title: 'Định vị thương hiệu',
      url: require('../../Images/Dinh-vi-thuong-hieu.jpg'),
    },
    {
      title: 'Tổng đại lý',
      url: require('../../Images/Tong-dai-ly.jpg'),
    },
    {
      title: 'Phát triển dự án',
      url: require('../../Images/Phat-trien-du-an.jpg'),
    },
  ]
  return (
    <StyledSell>
      <div className="title">
        <span style={{color: 'black'}}>DỰ ÁN</span>
        <span style={{color: '#00AF74'}}> mở bán</span>
      </div>
      <div className="list">
        <div className="navigation">
          <div className="prev-1"></div>
          <div className="next-1"></div>
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Swiper
            navigation={{
              nextEl: '.next-1',
              prevEl: '.prev-1',
            }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '350px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  ></div>
                  <div className="content">
                    <div className="text">{item.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledSell>
  )
}

export default Sell
