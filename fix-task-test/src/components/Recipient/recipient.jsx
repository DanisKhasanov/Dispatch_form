const Recipient = ({ recipient, setRecipient }) => {
  const handleNameChange = (e) => {
    setRecipient({ ...recipient, name: e.target.value });
  };

  const handlePhoneChange = (index, value) => {
    const phones = recipient.phones.map((phone, i) =>
      i === index ? { ...phone, number: value } : phone
    );
    setRecipient({ ...recipient, phones });
  };

  const addPhone = () => {
    setRecipient({
      ...recipient,
      phones: [...recipient.phones, { number: "" }],
    });
  };

  return (
    <div>
      <h2>Получатель:</h2>
      <label >ФИО: </label>
      <input type="text" value={recipient.name} onChange={handleNameChange} />

      <label style={{marginLeft: "50px"}}> Телефон: </label>
      {recipient.phones.map((phone, index) => (
        <input
          key={index}
          type="text"
          value={phone.number}
          onChange={(e) => handlePhoneChange(index, e.target.value)}
        />
      ))}
      {/* <button style = {{marginLeft: "10px"}}onClick={addPhone}>Добавить телефон</button> */}
    </div>
  );
};

export default Recipient;
