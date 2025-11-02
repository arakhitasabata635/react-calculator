

function ButtonContainer({onBUttonClick}) {
  const buttonArray = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "c"
  ]

  return (
    <div className="buttons">
      {buttonArray.map((buttonName) => {
        return (
          <button 
          key={buttonName} 
          onClick={()=>onBUttonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonContainer;
