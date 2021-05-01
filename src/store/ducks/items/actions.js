import * as types from './types'

export const setItem = query => {
  return {
    type: types.SET_ITEM,
    query,
  }
}

export const removeItem = query => {
  return {
    type: types.REMOVE_ITEM,
    query
  }
}

export const nextEtapa = () => {
  return {
    type: types.NEXT_ETAPA
  }
}

export const setClient = query => {
  return {
    type: types.SET_CLIENT,
    query
  }
}

export const cancel = () => {
  return {
    type: types.CANCEL,
  }
}

export const onBuscCep = data => {
  return {
    type: types.ON_CEP,
    data
  }
}

export const setEnd = data => {
  return {
    type: types.SET_END,
    data
  }
}

export default {
  setItem,
  removeItem,
  nextEtapa,
  setClient,
  cancel,
  onBuscCep,
  setEnd
}