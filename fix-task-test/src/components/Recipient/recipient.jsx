import PropTypes from "prop-types";
import { validateRecipient } from "../Validate/validate";

const Recipient = ({ recipient, setRecipient }) => {
  const handleRecipient = (e) => {
    const { name, value } = e.target;
    setRecipient({ ...recipient, [name]: value });
  };

  const errors = validateRecipient(recipient);

  return (
    <div className="recipient-container">
      <h2>Получатель:</h2>
      <div className="recipient-inputs">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={recipient.name}
            onChange={handleRecipient}
            placeholder="ФИО"
          />
          <p className="error" data-placeholder=" ">
            {errors.name}
          </p>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phones"
            value={recipient.phones}
            onChange={handleRecipient}
            placeholder="Телефон"
          />
          <p className="error" data-placeholder=" ">
            {errors.phones}
          </p>
        </div>
      </div>
    </div>
  );
};

Recipient.propTypes = {
  recipient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phones: PropTypes.string.isRequired,
  }).isRequired,
  setRecipient: PropTypes.func.isRequired,
};

export default Recipient;
