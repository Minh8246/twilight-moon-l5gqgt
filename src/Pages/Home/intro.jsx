import React, {useEffect, useState} from 'react'
import {StyledIntro, StyledCard} from './style'
import {Card, Col, Row} from 'antd'
const Intro = () => {
  const [rowWidth, setRowWidth] = useState('100%')
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setRowWidth('100%')
      } else if (window.innerWidth < 768) {
        setRowWidth('90%')
      } else if (window.innerWidth < 992) {
        setRowWidth('80%')
      } else {
        setRowWidth('70%')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call the function initially to set the correct width

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <StyledIntro>
      <div className="intro-content">Ấn tượng Realnex</div>

      <Row
        gutter={[16, 16]}
        style={{
          width: rowWidth,
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
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledCard>
            <div>4+</div>
            <div>LĨNH VỰC HOẠT ĐỘNG</div>
          </StyledCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledCard>
            <div>3+</div>
            <div>CHI NHÁNH</div>
          </StyledCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledCard>
            <div>200+</div>
            <div>NHÂN SỰ</div>
          </StyledCard>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledCard>
            <div>50+</div>
            <div>DỰ ÁN</div>
          </StyledCard>
        </Col>
      </Row>
    </StyledIntro>
  )
}

export default Intro
