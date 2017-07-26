import { combineReducers } from 'redux';
import PropertiesReducer from './reducer_properties';
import SelectedProperty from './reducer_selected_property';

const rootReducer = combineReducers({
  properties: PropertiesReducer,
  selectedProperty: SelectedProperty
});
export default rootReducer;
