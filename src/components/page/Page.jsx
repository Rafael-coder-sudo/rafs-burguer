import React from 'react'

//import my components
import * as Layout from '../../styles/Layout'


export default props => {
  return (
    <React.Fragment>
      <Layout.Header>
        RAF<Layout.titleOne>'</Layout.titleOne>
      S<Layout.titleOne>BURGUER</Layout.titleOne>
      </Layout.Header>
      {props.children}
    </React.Fragment>
  )
}