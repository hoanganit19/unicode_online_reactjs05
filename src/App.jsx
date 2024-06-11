import { useCallback, useMemo, useState } from "react";
import Content from "./components/Content";

export default function App() {
  const [amount, setAmount] = useState("");
  const [histories, setHistores] = useState([]);
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Vui lòng nhập số tiền");
      return;
    }
    setHistores([...histories, amount]);
    setAmount("");
  };
  const amountTotal = useMemo(() => {
    return histories.reduce((total, amount) => {
      console.log("reduce");
      return +total + +amount;
    }, 0);
    //Callback trong useMemo phải có return
  }, [histories]);
  const handleClearHistories = useCallback(() => {
    setHistores([]);
  }, []); //Khởi tạo hàm khi component được mount
  console.log("app render");
  return (
    <div>
      <form action="" onSubmit={handleAdd}>
        <input
          type="number"
          placeholder="Số tiền"
          value={amount}
          onChange={handleChangeAmount}
        />
        <button>Thêm</button>
      </form>
      <h2>Lịch sử giao dịch: {amountTotal.toLocaleString("vi-VN")}</h2>
      {histories.map((history, index) => (
        <h4 key={index}>
          #{index + 1}: {(+history).toLocaleString("vi-VN")}
        </h4>
      ))}
      <Content histories={histories} onClick={handleClearHistories} />
    </div>
  );
}

//React.memo ==> HOC (Higher Order Component)
//useMemo ==> Cache giá trị trong 1 component giữa các lần re-render
//useCallback ==> Cache hàm trong 1 component giữa các lần re-render
