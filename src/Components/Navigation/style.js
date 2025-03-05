import Styled from 'styled-components'

export const StyledNav = Styled.div`
    background-color: #333840D6;
    position: fixed;
    height: fit-content;
    width: calc(100% - 40px);
    padding: 0px 20px;
    top: 0px;
    z-index: 1000;
}
`
export const NavContainer = Styled.div`

    max-width: 100%;
    width: fit-content;
    margin:auto;
    align-items: center;
    gap: 20px;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        justify-content: space-around;
        width: 100%;
    }
    `

export const MobileMenu = Styled.div`
 @media (min-width: 1200px) {
    display: none;
    }
`
export const PCMenu = Styled.div`
display: flex;
    @media (max-width: 1200px) {
        display: none;
    }
`
export const MenuItem = Styled.div`
    position: relative;
    padding: 15px 20px;
    cursor: pointer;
    &:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: #fff;
    }
`
