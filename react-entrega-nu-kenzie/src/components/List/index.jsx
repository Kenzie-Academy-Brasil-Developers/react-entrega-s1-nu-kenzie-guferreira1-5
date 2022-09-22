import { BsTrash } from "react-icons/bs";
import { Button } from "../Button";
import { Card } from "../Card";

import "./index.css";

export const List = ({ array, setArray, typeFilters }) => {
  return (
    <div className="divLista">
      <ul className="lista">
        <Card
          array={array}
          setArray={setArray}
          typeFilters={typeFilters}
        />
      </ul>
    </div>
  );
};
