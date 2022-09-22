import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Button } from "../Button";
import { Filtros } from "../Filtros";
import { Header } from "../Header";
import { Input } from "../Input";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";

import "./index.css";

export const Form = ({ changePages }) => {
  const [listTransactions, setListTransactions] = useState({
    description: null,
    value: null,
    type: null,
  });

  const [array, setArray] = useState([]);

  const [typeFilters, setTypeFilters] = useState("todos");

  const newValueInput = (e) => {
    if (e.target.getAttribute("name") === "description") {
      setListTransactions({
        description: e.target.value,
        value: listTransactions.value,
        type: listTransactions.type,
      });
    } else if (e.target.getAttribute("name") === "value") {
      setListTransactions({
        description: listTransactions.description,
        value: e.target.value,
        type: listTransactions.type,
      });
    } else if (e.target.getAttribute("name") === "type") {
      setListTransactions({
        description: listTransactions.description,
        value: listTransactions.value,
        type: e.target.value,
      });
    }
  };

  const handleTransactions = (event) => {
    event.preventDefault();

    setArray([...array, listTransactions]);
  };

  return (
    <div>
      <header>
        <Header changePages={changePages} />
      </header>
      <main className="content">
        <section>
          <div className="formulario">
            <form onSubmit={handleTransactions}>
              <div className="descricao">
                <label htmlFor="descricao">Descrição</label>
                <Input
                  name="description"
                  onChange={(e) => newValueInput(e)}
                  value={listTransactions.description}
                >
                  Descrição
                </Input>
                <span>Ex: Compra de roupas</span>
              </div>
              <div className="value">
                <div className="divInput">
                  <label htmlFor="value">Valor</label>
                  <Input
                    onChange={(e) => newValueInput(e)}
                    value={listTransactions.value}
                    name="value"
                    type={"number"}
                  >
                    R$
                  </Input>
                </div>
                <div className="divSelect">
                  <label htmlFor="tipoValor">
                    Tipo de valor
                  </label>
                  <select
                    name="type"
                    onChange={(e) => newValueInput(e)}
                    value={listTransactions.type}
                  >
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saida</option>
                    <IoIosArrowDown />
                  </select>
                </div>
              </div>
              <Button className="buttons" type={"submit"}>
                Inserir Valor
              </Button>
            </form>
            <TotalMoney array={array} />
          </div>
        </section>
        <section className="lancamentos">
          <div className="headerLancamento">
            <h2>Resumo financeiro</h2>
            <div className="botoes">
              <Filtros setTypeFilters={setTypeFilters} />
            </div>
          </div>
          <List
            array={array}
            setArray={setArray}
            typeFilters={typeFilters}
          />
        </section>
      </main>
    </div>
  );
};
