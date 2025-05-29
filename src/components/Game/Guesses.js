import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ words }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((rowNumber) => {
        const hasWord = rowNumber < words.length;
        return (
          <p className="guess" key={`row-${rowNumber}`}>
            {range(0, 5, 1).map((_, colNumber) => {
              const letter = hasWord ? words[rowNumber]["word"][colNumber] : "";
              const status = hasWord
                ? words[rowNumber]["status"][colNumber]
                : "";
              return (
                <span
                  className={`cell ${status}`}
                  key={`row-${rowNumber}-col-${colNumber}`}
                >
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
