import React, {useEffect, useState} from 'react'
import {
  StyledIntro,
  StyledCard,
  StyledActivities,
  StyledActivitiesCard,
} from './style'
import {Card, Col, Row} from 'antd'
const Activities = () => {
  return (
    <StyledActivities>
      <div className="title">
        <span style={{color: 'black'}}>Lĩnh vực</span>
        <span style={{color: '#00AF74'}}> hoạt động</span>
      </div>
      <Row
        gutter={[16, 16]}
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          marginTop: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StyledActivitiesCard
            style={{
              backgroundImage: `url(${require('../../Images/Tu-van-chien-luoc.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="content">
              <div className="text">Tư vấn chiến lược</div>
            </div>
          </StyledActivitiesCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledActivitiesCard
            style={{
              backgroundImage: `url(${require('../../Images/Phat-trien-du-an.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="content">
              <div className="text">Phát triển dự án</div>
            </div>
          </StyledActivitiesCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledActivitiesCard
            style={{
              backgroundImage: `url(${require('../../Images/Dinh-vi-thuong-hieu.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="content">
              <div className="text">Định vị thương hiệu</div>
            </div>
          </StyledActivitiesCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledActivitiesCard
            style={{
              backgroundImage: `url(${require('../../Images/Tong-dai-ly.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="content">
              <div className="text">Tổng đại lý</div>
            </div>
          </StyledActivitiesCard>
        </Col>
      </Row>
    </StyledActivities>
  )
}

export default Activities
