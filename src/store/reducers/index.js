import { combineReducers } from 'redux';
import itemsReducer from '../ducks/items';


const rootReducer = combineReducers({
	items: itemsReducer,

});

export default rootReducer;
