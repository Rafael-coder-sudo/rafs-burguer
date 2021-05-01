import React, { Component } from 'react'
import {connect} from 'react-redux'

import { itemsActions } from '../../store/actions'


import Page from '../../components/page/Page'
import * as utils from '../../styles/utils'
import Form from '../../components/clientes'

class Cliente extends Component {
  render() {

    const oncancel = () => {
      const {cancel} = this.props
      window.location = '/'
      cancel()

    }
    const {setClient, onBuscCep, end} = this.props
    return (
      <Page>
        <utils.TitleSession>Preencha seus dados</utils.TitleSession>
        <div className="p-5">
          <Form submit={(data) => setClient(data)} 
          oncancel={oncancel} 
          onBuscCep={(e) => onBuscCep(e.target.value)}
          endereco= {end}/>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.items.list,
  total: state.items.price,
  end: state.items.end
})


const mapDispatchToProps = dispatch => {
	return {
    setClient: data => dispatch(itemsActions.setClient(data)),
    cancel: () => dispatch(itemsActions.cancel()),
    onBuscCep: data => dispatch(itemsActions.onBuscCep(data))
	};
};

export default  connect(mapStateToProps, mapDispatchToProps)(Cliente);