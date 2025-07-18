import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!myBill || !amount) return;

    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {selectedFriend.name}</h2>
      <label htmlFor="">Total biaya</label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <label htmlFor="">Tagihan Kamu</label>
      <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)} />

      <label htmlFor="">Tagihan si {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">ditalangin siapa?</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)} value={whoIsPaying}>
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
