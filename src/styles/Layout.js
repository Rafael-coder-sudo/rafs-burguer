import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 80px;
    background: #070606;
    font-family: 'Anton', sans-serif;
    color: white;
    font-size:35px;
    display:flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 360px) {
        font-size: 1.5em;
      }
    
`
export const titleOne = styled.span`
    color: #FBB81E;
`

export const Footer = styled.footer`
    width: 100%;
    heigth: 30px;
    background: #070606;
    color: white;
    font-size: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
`
