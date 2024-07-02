import { useSelector, useDispatch } from "react-redux";
import { setPackages } from "../../store/reducers/packagesReducer";
import { useEffect } from "react";

const Packages = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages);

  useEffect(() => {
    const initialPackages = [
      {
        number: 1,
        weight: 0.0413,
        length: 19,
        width: 1,
        height: 1,
        items: ["S056:CQ-12 GOLD"],
        ware_key: "С056-12 ЗОЛОТО",
        cost: 106.3,
        weightPerUnit: 0.0413,
        amount: 1,
      },
      {
        number: 2,
        weight: 0.0405,
        length: 26,
        width: 1,
        height: 1,
        items: ["S046:CQ-10 GOLD"],
        ware_key: "С046-10 ЗОЛОТО",
        cost: 80.8,
        weightPerUnit: 0.0405,
        amount: 1,
      },
      {
        number: 3,
        weight: 0.0405,
        length: 26,
        width: 1,
        height: 1,
        items: ["S046:CQ-10 GOLD"],
        ware_key: "С046-10 ЗОЛОТО",
        cost: 80.8,
        weightPerUnit: 0.0405,
        amount: 1,
      },
      {
        number: 4,
        weight: 0.0405,
        length: 26,
        width: 1,
        height: 1,
        items: ["S046:CQ-10 GOLD"],
        ware_key: "С046-10 ЗОЛОТО",
        cost: 80.8,
        weightPerUnit: 0.0405,
        amount: 1,
      },
      {
        number: 5,
        weight: 0.0405,
        length: 26,
        width: 1,
        height: 1,
        items: ["S046:CQ-10 GOLD"],
        ware_key: "С046-10 ЗОЛОТО",
        cost: 80.8,
        weightPerUnit: 0.0405,
        amount: 1,
      },
    ];

    dispatch(setPackages(initialPackages));
  }, [dispatch]);

  return (
    <div className="packages-table">
      <h2>Информация по упаковкам:</h2>
      <table>
        <div style={{ maxHeight: "280px", overflowY: "auto" }}>
          <thead>
            <tr>
              <th>Номер упаковки</th>
              <th>Общий вес (г)</th>
              <th>Габариты (см)</th>
              <th>Позиции товаров</th>
              <th>Идентификатор товара</th>
              <th>Объявленная стоимость (руб)</th>
              <th>Вес за единицу товара (г)</th>
              <th>Количество единиц товара</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index}>
                <td>{pkg.number}</td>
                <td>{pkg.weight}</td>
                <td>{`${pkg.length}x${pkg.width}x${pkg.height}`}</td>
                <td>{pkg.items.join(", ")}</td>
                <td>{pkg.ware_key}</td>
                <td>{pkg.cost.toFixed(2)}</td>
                <td>{pkg.weightPerUnit}</td>
                <td>{pkg.amount}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
};

export default Packages;
