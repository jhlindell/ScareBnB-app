export default function(state = [], action){
  switch (action.type) {
    case 'GET_PROPERTIES':
      {
        return action.payload.data;
      }

    case 'POST_PROPERTY':
      {
        return state.concat([action.payload.data]);
      }

    default:
      return state;
  }
}
