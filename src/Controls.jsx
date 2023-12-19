import React, { useContext } from "react";
import { mixtapeContext } from "./Composants/mixtapeContext";

export const Controls = () => {
  const {genre, sortOrder, setGenre, setSortOrder } = useContext(mixtapeContext)

  return (
    <div className="controls">
      TODO: add some controls!
      <select value={genre}  onChange={(e) => setGenre(e.target.value)} >
        <option value="All">All</option>
        <option value="hip hop" >hip hop</option>
        <option value="rap" >rap</option>
        <option value="rock" >rock</option>
        <option value="pop" >pop</option>

      </select>
      <button onClick={() =>
          setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
        }
      >
        {sortOrder}
      </button>

    </div>
  );
};
