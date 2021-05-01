import React from 'react'

import Page from '../../components/page/Page'
import * as Style from '../../styles/Home'
export default props => {

  return (
    <Page>
      <Style.Home>
        <Style.ShowOn>
          <p className="text-light pt-5">Faça seu pedido para delivery</p>
          <Style.textLarge>O burguer perfeito</Style.textLarge>
          <h2 className="text-light p-2">Feito Com carne fresca nunca congelada</h2>
          <a href="#cardapio"><button className="btn btn-warning btn-lg m-2 p-2">Ver o cardapio</button></a> 
        </Style.ShowOn>
      </Style.Home>
    </Page>
  )
}