import { useEffect, useRef } from "react";

function Map() {
  
  const widget = useRef();

  useEffect(() => {
    // 2. Помещаем конструктор в current. Настраиваем конфигурацию
    widget.current = new window.CDEKWidget({
      from: {
        country_code: "RU",
        city: "Новосибирск",
        postal_code: 630009,
        code: 270,
        address: "ул. Большевистская, д. 101",
      },
      apiKey: "0877a725-bbfd-4321-8049-628abf59f875",
      canChoose: true,
      servicePath: "Твой servicePath",
      hideFilters: {
        have_cashless: false,
        have_cash: false,
        is_dressing_room: false,
        type: false,
      },
      debug: true,
      defaultLocation: "Москва, ш. Старомарьинское, 6, корп. 1",
      lang: "rus",
      currency: "RUB",
      tariffs: {
        office: [234, 136, 138],
        door: [233, 137, 139],
        pickup: [235, 138, 137],
      },
      hideDeliveryOptions: {
        office: false,
        door: true,
      },
      popup: true,
      goods: [
        {
          width: 10,
          height: 10,
          length: 10,
          weight: 10,
        },
      ],
      onReady() {
        console.log("Widget is ready");
      },
      onCalculate(rates, address) {
        console.log(rates, address);
      },
      onChoose(delivery, rate, address) {
        console.log(delivery, rate, address);
      },
    });

    // 3. Открываем виджет после его создания
    widget.current.open();
  }, []);

  return <div style={{ width: "100%", height: "100%" }} />;
}

export default Map;
