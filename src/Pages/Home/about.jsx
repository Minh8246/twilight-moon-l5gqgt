import React from 'react'
import {
  NewsCard,
  NewsDate,
  NewsTitle,
  StyledAbout,
  StyledNewsContainer,
  StyledTitle,
} from './style'
import {CalendarOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {Card} from 'antd'
const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .ant-card-body {
    padding: 16px;
  }
  .title {
    font-weight: bold;
    font-size: 16px !important;
    color: #000;
  }
  .date {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: gray;
  }
`
const About = () => {
  const newsData = [
    {
      image: require('../../Images/Vi-tri-du-an-Golden-Crown-Hai-Phong-toa-lac-tai-Nga-tu-Le-Hong-Phong-va-Nguyen-Binh-Khiem-Dang-Hai-Hai-An-TP-Hai-Phong-1.jpg'),
      title: 'HÀNH TRÌNH VỀ MIỀN ĐẤT PHẬT: CHÙA TAM CHÚC – ĐỊA TẠNG PHI',
      date: '07/03/2023',
    },
    {
      image: require('../../Images/Vi-tri-du-an-Golden-Crown-Hai-Phong-toa-lac-tai-Nga-tu-Le-Hong-Phong-va-Nguyen-Binh-Khiem-Dang-Hai-Hai-An-TP-Hai-Phong-1.jpg'),
      title: 'REALNEX GROUP BỔ NHIỆM – PHÓ TỔNG GIÁM ĐỐC KINH',
      date: '07/03/2023',
    },
    {
      image: require('../../Images/Vi-tri-du-an-Golden-Crown-Hai-Phong-toa-lac-tai-Nga-tu-Le-Hong-Phong-va-Nguyen-Binh-Khiem-Dang-Hai-Hai-An-TP-Hai-Phong-1.jpg'),
      title: "REALNEX GROUP ĐÊM TIỆC YEAR END PARTY 2024 BÙNG NỔ: 'CÁT",
      date: '07/03/2023',
    },
  ]
  const NewsItem = ({image, title, date}) => (
    <NewsCard
      cover={
        <img
          src={image}
          alt="news"
          style={{
            borderRadius: 8,

            width: '117px',
            height: '117px',
          }}
        />
      }
    >
      <div>
        <span
          style={{
            color: '#018A5C',
          }}
        >
          Tin tức nội bộ{' '}
        </span>
      </div>
      <NewsTitle>{title}</NewsTitle>
      <NewsDate>{date}</NewsDate>
    </NewsCard>
  )

  const NewsItem2 = ({image, title, date}) => (
    <NewsCard
      cover={
        <img
          src={image}
          alt="news"
          style={{
            borderRadius: 8,

            width: '117px',
            height: '117px',
          }}
        />
      }
    >
      <div>
        <span
          style={{
            color: '#018A5C',
          }}
        >
          Tuyển dụng
        </span>
      </div>
      <NewsTitle>{title}</NewsTitle>
      <NewsDate>{date}</NewsDate>
    </NewsCard>
  )

  return (
    <StyledAbout>
      <div className="main-content">
        <div className="title">
          <span style={{color: 'white'}}>Về</span>
          <span style={{color: '#00AF74'}}> chúng tôi</span>
        </div>
        <div className="container">
          <img
            src={require('../../Images/Vi-tri-du-an-Golden-Crown-Hai-Phong-toa-lac-tai-Nga-tu-Le-Hong-Phong-va-Nguyen-Binh-Khiem-Dang-Hai-Hai-An-TP-Hai-Phong-1.jpg')}
            width={876}
            style={{flex: 2, borderRadius: '20px'}}
          />
          <StyledNewsContainer>
            <StyledTitle>
              TIN TỨC <span>NỘI BỘ</span>
            </StyledTitle>
            {newsData.map((news, index) => (
              <NewsItem key={index} {...news} />
            ))}
          </StyledNewsContainer>
        </div>
      </div>
      <div className="main-content">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            className="title"
            style={{
              marginTop: '40px',
            }}
          >
            <span style={{color: 'white'}}>Tin</span>
            <span style={{color: '#00AF74'}}> Tức</span>
          </div>
          <div
            className="title"
            style={{
              marginTop: '40px',
            }}
          >
            <span style={{color: 'white'}}>Tuyển </span>
            <span style={{color: '#00AF74'}}> dụng</span>
          </div>
        </div>

        <div className="container">
          <div className="container2">
            <div
              style={{
                background: 'white',
                padding: '16px',
                borderRadius: '10px',
                flex: '1',
              }}
            >
              <StyledCard
                cover={
                  <img
                    src={require('../../Images/bat-dong-san-pho-yen-thi-truong-day-tiem-nang-cho-nha-dau-tu.3-1536x864.jpg')}
                    alt="Real Estate"
                  />
                }
              >
                <div
                  style={{
                    color: 'green',
                    fontSize: '12px',
                    marginBottom: '5px',
                  }}
                >
                  TIN TỨC THỊ TRƯỜNG
                </div>
                <div className="title">
                  BẤT ĐỘNG SẢN PHỔ YÊN – THỊ TRƯỜNG ĐẦY TIỀM NĂNG CHO NHÀ ĐẦU TƯ
                </div>
                <div className="date">
                  <CalendarOutlined style={{marginRight: 5}} /> 05/03/2025
                </div>
              </StyledCard>
            </div>

            <StyledNewsContainer>
              {newsData.map((news, index) => (
                <NewsItem key={index} {...news} />
              ))}
            </StyledNewsContainer>
          </div>

          <StyledNewsContainer>
            {newsData.map((news, index) => (
              <NewsItem2 key={index} {...news} />
            ))}
          </StyledNewsContainer>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About
