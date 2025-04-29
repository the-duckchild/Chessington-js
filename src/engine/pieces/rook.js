import Piece from "./piece";
import Square from "../square";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    // location.row, location.col
    let rookAvailableMoves = [];
    for (let i = 0; i < location.col; i++) {
      rookAvailableMoves.push(Square.at(location.row, i));
    }
    for (let i = location.col + 1; i <= 7; i++) {
      rookAvailableMoves.push(Square.at(location.row, i));
    }
    for (let i = 0; i < location.row; i++) {
      rookAvailableMoves.push(Square.at(i, location.col));
    }
    for (let i = location.row + 1; i <= 7; i++) {
      rookAvailableMoves.push(Square.at(i, location.col));
    }
    console.log(rookAvailableMoves);

    return rookAvailableMoves;
  }
}
