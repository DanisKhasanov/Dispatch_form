import PropsTypes from "prop-types";

const DeliveryMethod = ({ deliveryMethod, setDeliveryMethod }) => {
  const handleChange = (value) => {
    setDeliveryMethod(value);
  };

  return (
    <div className="delivery-method-container">
      <h2>Способ доставки:</h2>
      <div className="delivery-options">
        <label className="delivery-option">
          <input
            type="radio"
            value="Доставка"
            checked={deliveryMethod === "Доставка"}
            onChange={() => handleChange("Доставка")}
          />
          Доставка
        </label>
        <label className="delivery-option">
          <input
            type="radio"
            value="ПВЗ"
            checked={deliveryMethod === "ПВЗ"}
            onChange={() => handleChange("ПВЗ")}
          />
          ПВЗ
        </label>
      </div>
    </div>
  );
};
DeliveryMethod.propTypes = {
  deliveryMethod: PropsTypes.string,
  setDeliveryMethod: PropsTypes.func,
};
export default DeliveryMethod;
