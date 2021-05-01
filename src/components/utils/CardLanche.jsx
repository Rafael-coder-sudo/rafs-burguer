import React from 'react'

import * as utils from '../../styles/utils'

import Img from "../../assets/imgs/lanche1.jpg"


export default props => {
    

  return (
    <utils.cardLanches>
      <utils.ImgItems src={`../../assets/imgs/${props.img}.jpg`} />
      <utils.TitleItem>{props.title}</utils.TitleItem>
      <utils.DescItem>{props.ingredients}</utils.DescItem>
      <utils.Money><utils.checBox
        type="checkbox"
        onChange={props.orBuyOrTrash} />R${props.price}</utils.Money>
      
    </utils.cardLanches>
  )
}