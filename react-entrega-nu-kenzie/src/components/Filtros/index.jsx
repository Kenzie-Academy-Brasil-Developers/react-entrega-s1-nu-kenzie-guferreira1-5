import { Button } from "../Button";

export const Filtros = ({ setTypeFilters }) => {
  const allList = () => {
    setTypeFilters("todos");
  };
  const enterList = () => {
    setTypeFilters("entrada");
  };

  const outList = () => {
    setTypeFilters("saida");
  };
  return (
    <>
      <Button changePages={allList}>Todos</Button>
      <Button changePages={enterList}>Entradas</Button>
      <Button changePages={outList}>Despesas</Button>
    </>
  );
};
