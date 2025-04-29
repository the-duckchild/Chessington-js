import Player from "../player";
import Square from "../square";
import Piece from "./piece";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let availableMoves = [];

    if (this.player === Player.WHITE) {
      //   let funcRet = board.getPiece(Square.at(location.row +1, location.col));

      if (location.row === 1) {
        availableMoves.push(Square.at(location.row + 1, location.col));
        availableMoves.push(Square.at(location.row + 2, location.col));
      } else {
        availableMoves.push(Square.at(location.row + 1, location.col));
      }
    } else {
      let funcRet = board.getPiece(Square.at(location.row - 1, location.col));
      if (funcRet != undefined) {
        return [];
      } else if (location.row === 6) {
        availableMoves.push(Square.at(location.row - 1, location.col));
        availableMoves.push(Square.at(location.row - 2, location.col));

        let twoSquare = board.getPiece(Square.at(location.row - 2, location.col));
        if (twoSquare != undefined) {
          availableMoves.pop();
      }

      } else {
        availableMoves.push(Square.at(location.row - 1, location.col));
      }
    }

    return availableMoves;
  }
}
