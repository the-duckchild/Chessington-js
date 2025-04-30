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
      if (location.row === 7) {
        return [];
      } else if (location.col == 0) {
        let topDiagonalRightPiece = board.getPiece(
          Square.at(location.row + 1, location.col + 1)
        );

        if (
          topDiagonalRightPiece != undefined &&
          topDiagonalRightPiece.player === Player.BLACK
        ) {
          availableMoves.push(Square.at(location.row + 1, location.col + 1));
        }
      } else if (location.col > 0 && location.col < 7) {
        let topDiagonalLeftPiece = board.getPiece(
          Square.at(location.row + 1, location.col - 1)
        );
        let topDiagonalRightPiece = board.getPiece(
          Square.at(location.row + 1, location.col + 1)
        );

        if (
          topDiagonalLeftPiece != undefined &&
          topDiagonalLeftPiece.constructor.name != "King"  &&
          topDiagonalLeftPiece.player === Player.BLACK
        ) {
          availableMoves.push(Square.at(location.row + 1, location.col - 1));
        } else if (
          topDiagonalRightPiece != undefined &&
          topDiagonalRightPiece.player === Player.BLACK
        ) {
          availableMoves.push(Square.at(location.row + 1, location.col + 1));
        }
      } else if (location.col === 7) {
        let topDiagonalLeftPiece = board.getPiece(
          Square.at(location.row + 1, location.col - 1)
        );
        if (
          topDiagonalLeftPiece != undefined &&
          topDiagonalLeftPiece.player === Player.BLACK
        ) {
          availableMoves.push(Square.at(location.row + 1, location.col - 1));
        }
      }
      if (location.row === 1) {
        availableMoves.push(Square.at(location.row + 1, location.col));
        availableMoves.push(Square.at(location.row + 2, location.col));
      } else {
        availableMoves.push(Square.at(location.row + 1, location.col));
      }
    } else {
      if (location.row === 0) {
        return [];
      }

      let oneSquareAhead = board.getPiece(
        Square.at(location.row - 1, location.col)
      );
      if (oneSquareAhead != undefined) {
        return [];
      } else if (location.row === 6) {
        availableMoves.push(Square.at(location.row - 1, location.col));
        availableMoves.push(Square.at(location.row - 2, location.col));
        let twoSquareAhead = board.getPiece(
          Square.at(location.row - 2, location.col)
        );
        if (twoSquareAhead != undefined) {
          availableMoves.pop();
        }
      } else {
        availableMoves.push(Square.at(location.row - 1, location.col));
      }
    }
    return availableMoves;
  }
}
