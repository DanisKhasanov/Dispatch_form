import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import recipientReducer from "./reducers/recipientReducer";
import fromLocationReducer from "./reducers/fromLocationReducer";
import deliveryMethodReducer from "./reducers/deliveryMethodReducer";
import toLocationReducer from "./reducers/toLocationReducer";
import packagesReducer from "./reducers/packagesReducer";

const store = configureStore({
  reducer: combineReducers({
    recipient: recipientReducer,
    fromLocation: fromLocationReducer,
    deliveryMethod: deliveryMethodReducer,
    toLocation: toLocationReducer,
    packages: packagesReducer,
  }),
});

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
