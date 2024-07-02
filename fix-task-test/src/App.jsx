import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreProvider from "./store";
import DeliveryMethod from "./components/DeliveryMethod/deliveryMethod";
import FromLocation from "./components/Location/fromLocation";
import ToLocation from "./components/Location/toLocation";
import Packages from "./components/Packages/packages";
import Map from "./components/Map/map";
import Recipient from "./components/Recipient/recipient";
import "./App.css";
import {
  setRecipient,
  resetRecipient,
} from "./store/reducers/recipientReducer";
import {
  resetFromLocation,
  setFromLocation,
} from "./store/reducers/fromLocationReducer";
import {
  resetDeliveryMethod,
  setDeliveryMethod,
} from "./store/reducers/deliveryMethodReducer";
import {
  resetToLocation,
  setToLocation,
} from "./store/reducers/toLocationReducer";
import { resetPackages, setPackages } from "./store/reducers/packagesReducer";
import { validateRecipient } from "./components/Validate/validate";

function App() {
  const dispatch = useDispatch();
  const recipient = useSelector((state) => state.recipient);
  const fromLocation = useSelector((state) => state.fromLocation);
  const deliveryMethod = useSelector((state) => state.deliveryMethod);
  const toLocation = useSelector((state) => state.toLocation);
  const packages = useSelector((state) => state.packages);

  const [formValid, setFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const errors = validateRecipient(recipient);
    const isFormValid =
      recipient.name.trim() !== "" &&
      !errors.phones && 
      fromLocation.address !== "" &&
      toLocation.address !== "";

    setFormValid(isFormValid);
  }, [recipient, fromLocation, deliveryMethod, toLocation, packages]);
  const handleSubmit = () => {
    const data = {
      recipient,
      fromLocation,
      deliveryMethod,
      toLocation,
      packages,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setErrorMessage("");

          dispatch(resetRecipient());
          dispatch(resetFromLocation());
          dispatch(resetDeliveryMethod());
          dispatch(resetToLocation());
          dispatch(resetPackages());
          console.log(data);
        } else {
          setErrorMessage("Произошла ошибка при отправке данных");
        }
      })
      .catch(() => {
        setErrorMessage("Произошла ошибка при отправке данных");
      });
  };

  const buttonClass = formValid ? "button-submit" : "button-submit-disabled";

  return (
    <StoreProvider>
      <div className="container">
        <div className="filling-card">
          <Recipient
            recipient={recipient}
            setRecipient={(data) => dispatch(setRecipient(data))}
          />
          <FromLocation
            fromLocation={fromLocation}
            setFromLocation={(data) => dispatch(setFromLocation(data))}
          />
          <DeliveryMethod
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={(data) => dispatch(setDeliveryMethod(data))}
          />
          <ToLocation
            toLocation={toLocation}
            setToLocation={(data) => dispatch(setToLocation(data))}
          />

          <Packages
            packages={packages}
            setPackages={(data) => dispatch(setPackages(data))}
          />

          <button
            className={isSubmitted ? "button-submit-success" : buttonClass}
            onClick={handleSubmit}
            disabled={!formValid || isSubmitted}
          >
            {isSubmitted ? "Отправлено" : "Отправить"}
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div style={{ flex: 1 }}>
          <Map />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
