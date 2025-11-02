function Display({ disValue }) {
  return (
    <input
      type="text"
      value={disValue}
      className="display"
      readOnly
    ></input>
  );
}

export default Display;
