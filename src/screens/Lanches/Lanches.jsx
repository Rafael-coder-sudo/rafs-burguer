//system component
import React from 'react'
import { connect } from 'react-redux'

import { itemsActions } from '../../store/actions'
//my components
import Page from '../../components/page/Page'
import * as utils from '../../styles/utils'
import * as CarBuy from '../../styles/carBuy'
import * as Layout from '../../styles/Layout'
import CardLanche from '../../components/utils/CardLanche'

import LanchesData from '../../dados/lanches.json'

class Lanches extends React.Component {
  render() {
    let lanchesMap = LanchesData.dataApi.lanches

    const orBuyOrTrash = (e, index) => {
      if (e.target.checked) {
        setItem(index)
      }
      else {
        removeItem(index.price)
      }
    }
    const { setItem, removeItem, nextEtapa, total } = this.props
    return (
      <Page>
        <utils.TitleSession>Selecione seu lanche</utils.TitleSession>
        <div className="row d-flex justify-content-center m-1 mb-5">
          <div className="col-md-6 mb-5">

            {lanchesMap.map((index) => <CardLanche
              key={index.id}
              img={index.img}
              title={index.name}
              ingredients={index.ingredients}
              price={index.price}
              orBuyOrTrash={(e) => orBuyOrTrash(e, index)}
            />)}

          </div>
        </div>
        <CarBuy.CarBuy>

          <Layout.Header className="justify-content-between p-2">
            <div>
              Total:<Layout.titleOne>R${total}</Layout.titleOne>
            </div>
            <a href="#cliente"><button className="btn btn-warning"
              onClick={() => nextEtapa()}
            >Completar compra</button></a></Layout.Header>

        </CarBuy.CarBuy>



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
    setItem: data => dispatch(itemsActions.setItem(data)),
    removeItem: data => dispatch(itemsActions.removeItem(data)),
    nextEtapa: data => dispatch(itemsActions.nextEtapa())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lanches)