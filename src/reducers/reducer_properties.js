export default function(state = [], action){
  switch (action.type) {
    case 'GET_PROPERTIES':
      {
        return action.payload.data;
      }

    case 'POST_PROPERTY':
      {
        console.log(action.payload);
      }

    default:
      return state;
  }
}
