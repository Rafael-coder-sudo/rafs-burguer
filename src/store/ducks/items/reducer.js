
import * as type from './types'

const INITIAL_STATE = {
	list: [],
	price: 0,
	end: {}
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
		case type.SET_END: {
			return {
				...state,
				end: action.data
			}
		}
		default:
			return state
	}
}


export default userReducer;