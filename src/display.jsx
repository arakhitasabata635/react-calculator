function Display({ disValue }) {
  return (
    <input
      type="text"
      value={disValue}
      style={{
        height: "50px",
        fontSize: "26px",
        fontWeight: "500",
        paddingInline: "5px",
      }}
      readOnly
    ></input>
  );
}

export default Display;
