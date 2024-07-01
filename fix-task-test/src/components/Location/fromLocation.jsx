
const FromLocation = ({ fromLocation, setFromLocation }) => {
  return (
    <div>
      <h2>Адрес отправления:</h2>
      <input
        type="text"
        value={fromLocation.address}
        onChange={(e) => setFromLocation({ ...fromLocation, address: e.target.value })}
      />
    </div>
  );
};

export default FromLocation;
