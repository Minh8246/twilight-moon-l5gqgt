import React from 'react'
import styled from 'styled-components'
import {Layout} from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

const {Footer} = Layout

const FooterContainer = styled(Footer)`
  background: #2d2f36;
  color: white;
  padding: 40px 80px;
  text-align: center;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`

const FooterColumn = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 20px;
  text-align: left;
`

const Logo = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
`

const Title = styled.h3`
  margin: 0;
  color: #00ae74;
  font-size: 16px;
  margin-bottom: 12px;
`

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 6px;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  font-size: 18px;
`

const BottomBar = styled.div`
  background: #00ae74;
  text-align: center;
  color: white;
  padding: 10px 0;
  font-size: 14px;
`

const FooterComponent = () => {
  return (
    <Layout>
      <FooterContainer>
        <FooterContent>
          {/* Cột 1: Logo */}
          <FooterColumn
            style={{
              textAlign: 'center',
            }}
          >
            <Logo
              src={require('../../Images/Logo-Footer.png')}
              alt="RealNEX Group"
            />
            <Text>Real Estate, Real Wins!</Text>
          </FooterColumn>

          {/* Cột 2: Thông tin liên hệ */}
          <FooterColumn>
            <Title>THÔNG TIN LIÊN HỆ</Title>
            <Text>CÔNG TY CỔ PHẦN TẬP ĐOÀN REALNEX</Text>
            <Text>
              Địa chỉ: Tầng 18, tòa nhà Cobi Tower, 727 Nguyễn Trãi, Thanh Xuân,
              Hà Nội
            </Text>
            <Text>Mã số thuế: 0109464289</Text>
            <Text>Nơi cấp: Sở Kế hoạch & Đầu tư Hà Nội</Text>
          </FooterColumn>

          {/* Cột 3: Kết nối */}
          <FooterColumn>
            <Title>KẾT NỐI VỚI CHÚNG TÔI</Title>
            <ContactItem>
              <MailOutlined /> info@realnex.com.vn
            </ContactItem>
            <ContactItem>
              <PhoneOutlined /> 098.668.6668
            </ContactItem>
            <ContactItem>
              <ClockCircleOutlined /> 8:00 sáng - 17:00 chiều
            </ContactItem>
            <SocialIcons></SocialIcons>
          </FooterColumn>
        </FooterContent>
      </FooterContainer>
      <BottomBar>© 2025 RealNex Group. All Rights Reserved.</BottomBar>
    </Layout>
  )
}

export default FooterComponent
