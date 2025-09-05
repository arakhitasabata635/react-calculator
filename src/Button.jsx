import style from "./Button.module.css";

function ButtonContainer({onBUttonClick}) {
  const buttonArray = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {buttonArray.map((buttonName) => {
        return (
          <button 
          key={buttonName} 
          className={style.button}
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
