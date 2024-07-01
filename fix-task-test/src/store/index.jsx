import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { recipientReducer, fromLocationReducer, deliveryMethodReducer, toLocationReducer, packagesReducer } from './reducer';

const rootReducer = combineReducers({
  recipient: recipientReducer,
  fromLocation: fromLocationReducer,
  deliveryMethod: deliveryMethodReducer,
  toLocation: toLocationReducer,
  packages: packagesReducer
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;
