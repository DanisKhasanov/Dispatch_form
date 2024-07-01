
const DeliveryMethod = ({ deliveryMethod, setDeliveryMethod }) => {
  return (
    <div>
  <h2>Способ доставки:</h2>
      <div>
        <input
          type="radio"
          value="ПВЗ"
          checked={deliveryMethod === 'ПВЗ'}
          onChange={() => setDeliveryMethod('ПВЗ')}
        />
        ПВЗ
        <input
          type="radio"
          value="Доставка"
          checked={deliveryMethod === 'Доставка'}
          onChange={() => setDeliveryMethod('Доставка')}
        />
        Доставка
      </div>
    </div>
  );
};

export default DeliveryMethod;
