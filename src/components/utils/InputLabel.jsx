import React from 'react'
import * as utils from '../../styles/utils'

export default ({label, ...inputprops}) => (
  <div className="text-justify">
    <utils.Label>{label}</utils.Label>
    <utils.inputForm {...inputprops}/>
      
  </div>
)