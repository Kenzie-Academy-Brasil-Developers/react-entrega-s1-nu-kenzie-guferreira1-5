import { BsTrash } from "react-icons/bs";
import { Button } from "../Button";

import "./index.css";

export const Card = ({ array, setArray, typeFilters }) => {
  return (
    <>
      {array.length <= 0
        ? "Você ainda não possui nenhum lançamento"
        : typeFilters === "todos"
        ? array.map((item, index) => (
            <li
              key={index}
              className={
                item.type === "entrada" ? "card" : "saida"
              }
            >
              <div className="valorCard">
                <p>{item.description}</p>
                <span>R$ {item.value} </span>
              </div>
              <span>{item.type}</span>
              <Button
                changePages={() =>
                  setArray(
                    array.filter((e, i) => i !== index)
                  )
                }
              >
                <BsTrash color="black" />
              </Button>
            </li>
          ))
        : array
            .filter((item) => item.type === typeFilters)
            .map((item, index) => (
              <li
                key={index}
                className={
                  item.type === "entrada" ? "card" : "saida"
                }
              >
                <div className="valorCard">
                  <p>{item.description}</p>
                  <span>R$ {item.value} </span>
                </div>
                <span>{item.type}</span>
                <Button
                  changePages={() =>
                    setArray(
                      array.filter((e, i) => i !== index)
                    )
                  }
                >
                  <BsTrash color="black" />
                </Button>
              </li>
            ))}
    </>
  );
};
