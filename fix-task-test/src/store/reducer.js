const initialRecipientState = {
    name: '',
    phones: [{ number: '' }]
  };
  
  export const recipientReducer = (state = initialRecipientState, action) => {
    switch (action.type) {
      case 'SET_RECIPIENT':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  const initialFromLocationState = { address: '' };
  
  export const fromLocationReducer = (state = initialFromLocationState, action) => {
    switch (action.type) {
      case 'SET_FROM_LOCATION':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  const initialDeliveryMethodState = 'ПВЗ';
  
  export const deliveryMethodReducer = (state = initialDeliveryMethodState, action) => {
    switch (action.type) {
      case 'SET_DELIVERY_METHOD':
        return action.payload;
      default:
        return state;
    }
  };
  
  const initialToLocationState = { address: '' };
  
  export const toLocationReducer = (state = initialToLocationState, action) => {
    switch (action.type) {
      case 'SET_TO_LOCATION':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  const initialPackagesState = [];
  
  export const packagesReducer = (state = initialPackagesState, action) => {
    switch (action.type) {
      case 'SET_PACKAGES':
        return [...action.payload];
      default:
        return state;
    }
  };
  