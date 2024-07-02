import PropTypes from "prop-types";
import { validateAddress } from "../Validate/validate";
import { useSelector } from "react-redux";

const ToLocation = ({ toLocation, setToLocation }) => {
  const deliveryMethod = useSelector((state) => state.deliveryMethod);
  
  const handleAddressChange = (e) => {
    const { value } = e.target;
    setToLocation({ ...toLocation, address: value });
  };

  const error =
    deliveryMethod !== "ПВЗ" ? validateAddress(toLocation.address) : "";

  const isDisabled = deliveryMethod === "ПВЗ";

  const placeholderText = isDisabled ? "Выберите адрес ПВЗ" : "Город, улица, дом";
  return (
    <div>
      <h2>Адрес назначения:</h2>
      <input
        type="text"
        value={toLocation.address}
        onChange={handleAddressChange}
        placeholder={placeholderText}
        disabled={isDisabled}
      />
       <p className="error" data-placeholder=" ">
        {error}
      </p>
    </div>
  );
};

ToLocation.propTypes = {
  toLocation: PropTypes.shape({
    address: PropTypes.string.isRequired,
  }).isRequired,
  setToLocation: PropTypes.func.isRequired,
  deliveryMethod: PropTypes.string.isRequired,
};

export default ToLocation;
