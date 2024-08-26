import { TURNS } from "../constants";

export const Square = ({ turn,children, updateBoard, index, isSelected }) => {
    const handleClick = () => {
      updateBoard(index);
    };

    if(turn === TURNS.O){

    }
  
    return (
      <div
        onClick={handleClick}
        className={`square ${isSelected && 'is-selected'}`}
        key={index}
      >
        {children}
      </div>
    );
  };