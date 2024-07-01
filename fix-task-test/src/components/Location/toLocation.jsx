const ToLocation = ({ toLocation, setToLocation, deliveryMethod }) => {
  return (
    <div>
      <h2>Адрес назначения:</h2>
      <input
        type="text"
        value={toLocation.address}
        onChange={(e) =>
          setToLocation({ ...toLocation, address: e.target.value })
        }
        disabled={deliveryMethod === "ПВЗ"}
      />
    </div>
  );
};

export default ToLocation;
