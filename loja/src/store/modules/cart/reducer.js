export default function cart(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      if(!state){
        return [];
      }
      else{
        return state;
      }

  }
}
