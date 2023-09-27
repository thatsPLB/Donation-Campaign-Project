import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
const Statistic = () => {
  let totalPrice = 0;
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    const donateData = JSON.parse(localStorage.getItem("donation"));
    if (donateData) {
      setDonate(donateData);
    }
  }, []);
  donate.map((data) => {
    totalPrice += data.price
  })
  totalPrice = Math.floor(totalPrice) 
  let target = 1000
  let need = (totalPrice/target)*100;

  return (
    <div style={{ display: "flex" }}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 100-need, label: "Total Donation"},
              { id: 1, value: need, label: "Your Donation"},
            ],
          },
        ]}
        width={800}
        height={400}
      />
    </div>
  );
};

export default Statistic;
