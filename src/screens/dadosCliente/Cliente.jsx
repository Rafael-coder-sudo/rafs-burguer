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
      window.location='#/'
      cancel()

    }
    const {setClient} = this.props
    return (
      <Page>
        <utils.TitleSession>Preencha seus dados</utils.TitleSession>
        <div className="p-5">
          <Form submit={(data) => setClient(data)} oncancel={()=> oncancel()}/>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.items.list,
  total: state.items.price
})


const mapDispatchToProps = dispatch => {
	return {
    setClient: data => dispatch(itemsActions.setClient(data)),
    cancel: () => dispatch(itemsActions.cancel())
	};
};

export default  connect(mapStateToProps, mapDispatchToProps)(Cliente);