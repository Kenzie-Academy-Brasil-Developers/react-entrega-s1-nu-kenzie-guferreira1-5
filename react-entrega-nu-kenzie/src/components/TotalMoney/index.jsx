import "./index.css";

export const TotalMoney = ({ array }) => {
  const sum = array.reduce((acc, crr) => {
    if (crr.type === "saida") {
      return -Number(crr.value) + acc;
    }
    return Number(crr.value) + acc;
  }, 0);

  return (
    <div className="divTotal">
      <div className="total">
        <p>Valor total:</p>
        <p>
          R$ {sum.toFixed(2).toString().replace(".", ",")}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
