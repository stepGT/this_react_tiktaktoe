import Square from "./Square";
import { useState } from 'react';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const items = [...squares];
    items[i] = xIsNext ? 'X' : '0';
    //
    setSquares(items);
    setXIsNext(!xIsNext);
  };
  const renderSquare = i => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const status = 'Next player: ' + (xIsNext ? 'X' : '0');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
