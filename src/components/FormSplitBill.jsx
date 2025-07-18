export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng si X</h2>
      <label htmlFor="">Total biaya</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Tagihan Kamu</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Tagihan si X</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">ditalangin siapa?</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">si X</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
