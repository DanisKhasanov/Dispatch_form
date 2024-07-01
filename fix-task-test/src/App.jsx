import DeliveryMethod from "./components/DeliveryMethod/deliveryMethod";
import FromLocation from "./components/Location/fromLocation";
import ToLocation from "./components/Location/toLocation";
import Map from "./components/Map/map";
import Recipient from "./components/Recipient/recipient";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const handleSubmit = () => {
  //   console.log(recipient);
  // };

  // let recipient = {
  //   name: "",
  //   phones: [{ number: "" }],
  // };

  const dispatch = useDispatch();
  const recipient = useSelector(state => state.recipient);
  const fromLocation = useSelector(state => state.fromLocation);
  const deliveryMethod = useSelector(state => state.deliveryMethod);
  const toLocation = useSelector(state => state.toLocation);
  const packages = useSelector(state => state.packages);
  // const [points, setPoints] = useState([]);
  // const [selectedPoint, setSelectedPoint] = useState(null);

  const setRecipient = (data) => dispatch({ type: 'SET_RECIPIENT', payload: data });
  const setFromLocation = (data) => dispatch({ type: 'SET_FROM_LOCATION', payload: data });
  const setDeliveryMethod = (data) => dispatch({ type: 'SET_DELIVERY_METHOD', payload: data });
  const setToLocation = (data) => dispatch({ type: 'SET_TO_LOCATION', payload: data });
  // const setPackages = (data) => dispatch({ type: 'SET_PACKAGES', payload: data });

  const handleSubmit = () => {
    const data = {
      recipient,
      fromLocation,
      deliveryMethod,
      toLocation: deliveryMethod === 'Доставка' ? toLocation : selectedPoint,
      packages
    };

    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        alert('Данные успешно отправлены');
      } else {
        alert('Произошла ошибка при отправке данных');
      }
    });
  };
  return (
    <>
    <h1 style={{textAlign: 'center', color: 'blue'} }>Оформление заказа:</h1>
    <div className="container">
      <div className="filling-card">
        <Recipient recipient={recipient} setRecipient={setRecipient} />
        <FromLocation fromLocation={recipient} setFromLocation={setFromLocation} />
        <DeliveryMethod deliveryMethod={recipient} setDeliveryMethod={setDeliveryMethod} />
        <ToLocation toLocation={recipient} setToLocation={setToLocation} />
        <button className="button-submit" onClick={handleSubmit}>
          Отправить
        </button>
      </div>
      <div className="component-Map">
        <Map />
      </div>
    </div>
    </>
  );
}

export default App;
