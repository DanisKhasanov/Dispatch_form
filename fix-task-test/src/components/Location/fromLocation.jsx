import PropsTypes from "prop-types";
import { validateAddress } from "../Validate/validate";

const FromLocation = ({ fromLocation, setFromLocation }) => {
  const handleAddressChange = (e) => {
    setFromLocation({ ...fromLocation, address: e.target.value });
  };


  const error = validateAddress(fromLocation.address);

  
  return (
    <div>
      <h2>Адрес отправления:</h2>
      <input
        type="text"
        value={fromLocation.address}
        onChange={handleAddressChange}
        placeholder="Город, улица, дом"
      />
      <p className="error" data-placeholder=" ">
        {error}
      </p>
    </div>
  );
};

FromLocation.propTypes = {
  fromLocation: PropsTypes.object,
  setFromLocation: PropsTypes.func,
};

export default FromLocation;
