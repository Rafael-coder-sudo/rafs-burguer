import React, { Component } from 'react'
import {connect} from 'react-redux'

import { itemsActions } from '../../store/actions'

import Page from '../../components/page/Page'
import * as utils from '../../styles/utils'
import { cancel } from '../../store/ducks/items/sagas'

class Finally extends Component {


  render() {
    
    const items = JSON.parse(sessionStorage.getItem('list'))
    const price = JSON.parse(sessionStorage.getItem('price'))
    const client = JSON.parse(sessionStorage.getItem('cli'))

    const onCancel = () =>{
      const { cancel} = this.props
      cancel()
      window.location = '/'
    }
    const text = `Olá, sou ${client.nome} e gostaria de fazer um pedido:
    %0A${items.map((index) => `${index.name}-----${index.price}%0D` )}
    %0ATotal: ${price}%0A
    %0AEntregar no:${client.endereco},${client.num}
    `

    return (
      <div>
        <Page>
          <utils.TitleSession>Confirme sua Compra</utils.TitleSession>
          <div className="p-5">
            <utils.cardLanches>
              <p><b>Pedido</b></p>
              {items.map((index) =>
                <div className="d-flex justify-content-between">
                  <div>{index.name}</div>
                  <div>{index.price}</div>
                </div>
              )}
              <div className="d-flex justify-content-end">
                <p><b>Total:</b>  {price}</p>
              </div>
              <p><b>Entrega</b></p>
              <p>Endereço: <b>{client.endereco}, {client.num}</b></p>
              <p>Entregar para: <b>{client.nome}</b></p>

            </utils.cardLanches>
            <div className="text-center pt-5">

              <button className="btn btn-danger btn-lg mr-2" onClick={() => onCancel()}>Cancelar</button>
              <a href={
                `https://api.whatsapp.com/send?phone=5511987234909&text=
                ${text}`
              }>
                <button className="btn btn-success btn-lg ">Confirmar</button>
              </a>
            </div>

          </div>
        </Page>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return {
    cancel: () => dispatch(itemsActions.cancel())
	};
};

export default connect(null, mapDispatchToProps)(Finally)
