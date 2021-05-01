
import * as type from './types'

const INITIAL_STATE = {
	list: [],
	price: 0
}

const userReducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case type.SET_ITEM:
			return {
				...state,
				list: [...state.list, action.query],
				price: state.price + action.query.price
			}
		case type.REMOVE_ITEM: {
			return {
				...state,
				price: parseFloat((state.price - action.query).toFixed(2))
			}
		}
		default:
			return state
	}
}


export default userReducer;