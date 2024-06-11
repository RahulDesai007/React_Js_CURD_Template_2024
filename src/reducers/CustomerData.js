import { CREATE } from '../types/data'
const initialState = []

const CustomerData = (state = initialState, action) => {

  switch (action.type) {
    case CREATE:
      return action.payload;
    default:
      return state;
  }
}

export default CustomerData; 