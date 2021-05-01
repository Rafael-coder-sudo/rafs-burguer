import styled from 'styled-components'

import img from '../assets/imgs/wallpaper.jpg'

export const Home = styled.section`
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;

`
export const ShowOn = styled.div`
  background: rgba(0,0,0,0.6);
  height: 94vh;
  text-align:center;
`

export const textLarge = styled.h1`
  color:white;
  @media (max-width: 400px) {
    font-size: 4em;
  }
  font-size: 6em;
  font-family: 'Anton', sans-serif;
`


