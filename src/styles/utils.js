import styled from 'styled-components'


export const cardItem = styled.div`
  border: 1px solid #070606;
  widht: 100%;
  heigth: 100px;
  margin: 20px;
  margin-bottom: 50px;
  background:  #070606;
  font-size: 30px;
  color: white;
  padding: 10px;
`

export const cardLanches = styled.div`
  border: 1px solid #070606;
  margin: 10px;
  padding: 10px;
`
export const ImgItems = styled.img`
  heigth: 100%;
  width: 100%;
`

export const TitleItem = styled.p`
  color: #070606;
  font-size: 20px;
  font-weight: bold;
  padding: 0px 10px 0px 10px;

`

export const DescItem = styled.p`
  color: #808080;
  padding: 0px 10px 0px 10px;
  font-size: 15px;
  font-weight: bold;
  text-align: justify;
`

export const Money = styled.h1`
  color: #070606;
  font-size: 20px;
  font-weight: bolder;
  display:flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`

export const TitleSession = styled.h1`
color: #070606;
font-size: 40px;
text-align: center;
margin: 20px;
font-weight: bolder;
&:after{
  content: '';
  display: block;
  width: 80px;
  height: 5px;
  background: #FBB81E;
  margin: 0 auto;
}
`


export const checBox = styled.input`
min-width: 30px;
    min-height: 30px;
    margin-right: 5px;
    margin-left: 5px;

`

export const inputForm = styled.input`
  color:#070606;
  width: 100%;
  border: none;
  padding: 5px;
  background: #EEF3F4;
  
  border-bottom: 3px outset  #FBB81E;
  margin-bottom: 15px;
  &:focus{
    outline: 0
  }
`
export const Label = styled.label`
  color: #070606;
  line-height: 0.4;
  font-weight: bold;
`

export const buttonConfirm = styled.a`
  margin-left: auto;

`