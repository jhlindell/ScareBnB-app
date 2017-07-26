export default function(state = null, action){
  switch(action.type){
    case 'PROPERTY_SELECTED':
      return action.payload;

    default:
      return state;
  }
}
