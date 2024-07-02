import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToLocation } from "../../store/reducers/toLocationReducer";

const Map = () => {
  const widgetRef = useRef(null);
  const dispatch = useDispatch();
  const deliveryMethod = useSelector((state) => state.deliveryMethod);

  useEffect(() => {
    function startWidget() {
      window.YaDelivery.createWidget({
        containerId: "delivery-widget",
        params: {
          city: "Казань",
          size: {
            height: "800px",
            width: "500px",
          },
          source_platform_station: "05e809bb-4521-42d9-a936-0fb0744c0fb3",
          physical_dims_weight_gross: 10000,
          delivery_price: "от 100",
          delivery_term: "от 1 дня",
          show_select_button: true,
          filter: {
            type: ["pickup_point", "terminal"],
            is_yandex_branded: false,
            payment_methods: ["already_paid", "card_on_receipt"],
            payment_methods_filter: "or",
          },
        },
      });
    }

    if (typeof window.YaDelivery !== "undefined") {
      startWidget();
    } else {
      document.addEventListener("YaNddWidgetLoad", startWidget);
    }

    const handlePointSelected = (data) => {
      const pointOfIssueData = {
        address: data.detail.address.full_address,
      };

      dispatch(setToLocation(pointOfIssueData));
    };

    document.addEventListener("YaNddWidgetPointSelected", handlePointSelected);
    widgetRef.current = document.getElementById('delivery-widget');

    return () => {
      document.removeEventListener("YaNddWidgetPointSelected", startWidget);
    };
  }, [dispatch]);

  return (
    <div
      id="delivery-widget"
      style={{
        height: "800px",
        width: "1100px",
        boxShadow:
          "0 30px 12px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)",
        pointerEvents: deliveryMethod === "Доставка" ? "none" : "auto",
        opacity: deliveryMethod === "Доставка" ? 0.5 : 1,
      }}
      ref={widgetRef}
    ></div>
  );
};

export default Map;
