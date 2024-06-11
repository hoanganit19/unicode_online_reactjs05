import { memo } from "react";
function Content({ histories, onClick }) {
  console.log("content render");
  return (
    <div>
      <h2>Số lượng giao dịch: {histories.length}</h2>
      <button onClick={onClick}>Xóa lịch sử</button>
    </div>
  );
}

export default memo(Content);
