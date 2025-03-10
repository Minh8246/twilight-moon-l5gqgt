import Styled from 'styled-components'
import {Card as AntdCard} from 'antd'
export const StyledIntro = Styled.div`
    color: white;
    background-color: #333840;
    margin-top: -60px;
    width: 100%;
    position: relative;
    z-index: 1;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-radius: 20px;
    .intro-content {
        color: #FFFFFF;
        font-family: "Inter", Sans-serif;
        font-size: 40px;
        text-transform: uppercase;
        line-height: 48.41px;
        text-align: center;
    }
    // .intro-container{
    //     display: flex;
    //     flex-wrap: wrap;
    // }
}
`
export const StyledCard = Styled(AntdCard)`
  border: 10px solid rgb(0, 175, 116);
  background-color: transparent;
  color: white;
    font-size: 20px;
    text-align: center;
    width: 200px;
    aspect-ratio: 1;
`
export const StyledActivities = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;

    .title {
        font-size: 40px;
        text-transform: uppercase;
    }
`
export const StyledActivitiesCard = Styled(AntdCard)`
  background-color: transparent;
  color: white;
    font-size: 20px;
    text-align: center;
    width: 335px;
    height: 490px;
    position: relative;
    .content{

        width: 100%;
        height: 138px;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #00000080;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        transition: height 0.3s ease;

        .text{
            padding:  20px;
        }
            
    }
    &:hover .content {
        height: 100%;
    }
      

`
export const StyledSell = Styled.div`
    max-width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    height: 350px;
    .title {
        font-size: 40px;
        text-transform: uppercase;
    }
        .list{
        max-width: 100%;
        margin-top: 20px;
        height: 100%;
            position: relative;
            .navigation{
                transform: translateX(-20px);
                top: 50%;
                width: calc(100% + 40px);
                display: flex;
                z-index: 2;
                justify-content: space-between;
                position: absolute;
                .prev-1{
                       background-color: transparent;
    background-image: url(https://realnex.com.vn/wp-content/uploads/2024/09/Group-10.png);
    background-position: center;
    background-size: 100px;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    margin-top: -40px;
    cursor: pointer;
}


                }
                .next-1{
                        background-color: transparent;
    background-image: url(https://realnex.com.vn/wp-content/uploads/2024/09/Group-9.png);
    background-position: center;
    background-size: 100px;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    margin-top: -40px;
    cursor: pointer;
                }
            }
        }
            .content{

        width: 100%;
        height: 138px;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #00000080;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        transition: height 0.3s ease;

        .text{
        color: white;
            padding:  20px;
        }
            
    }
`
export const StyledAbout = Styled.div`
    background-color: #333840;
    height: fit-content ;
    border-radius: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    margin-top: 20px;


    .main-content{
    width: 100%;
    max-width: min(1400px, calc(100% - 40px));
    
    display: flex;
    flex-direction: column;
    align-items: center;
        justify-content: space-between;
    }
    .title {
    
        font-size: 40px;
        text-transform: uppercase;
    }
        .container{
        margin-top: 20px;
        width: 100%;
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap:40px;
        }
        .container2{
           background-color: white;
           border-radius: 20px;
        min-width:min(876px, 100%);
        display: flex;
        flex: 2;
        justify-content: space-between;
        flex-wrap: wrap;
        }
`
export const StyledNewsContainer = Styled.div`

  background: white ;
  padding: 16px;
  border-radius: 10px;
  flex: 1;
`
export const StyledTitle = Styled.div`
  font-size: 18px;
  margin-bottom: 16px;
  span {
    color: #3fbf57;
  }
`

export const StyledSomeCompany = Styled.div`
    position: relative;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 1400px;
    .navigation{
                top: 50%;
                width: 100%;
                display: flex;
                z-index: 2;
                justify-content: space-between;
                position: absolute;
    .prev-1{
                       
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    margin-top: -40px;
    cursor: pointer;
}


                }
                .next-1{
                
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    margin-top: -40px;
    cursor: pointer;
                }
}
`
export const NewsCard = Styled(AntdCard)`
display: flex;
gap: 10px;
  background: #333840;
  border: none;
  margin-bottom: 12px;
  padding: 20px;
  .ant-card-body {
  width: 270px;
    padding: 0;
  }
`

export const NewsTitle = Styled.h3`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin: 6px 0;
`

export const NewsDate = Styled.p`
  font-size: 12px;
  color: #aaa;
`
