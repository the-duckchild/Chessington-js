import Piece from "./piece";
import Square from "../square";
import Player from "../player";
import GameSettings from "../gameSettings";
export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }
  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let availableMoves = [];
    //Forward Right Diagonal
    let row = location.row + 1;
    let col = location.col + 1;
    for (let i = row, j = col; i <= 7 && j <= 7; i++, j++) {
      let curPiece = board.getPiece(Square.at(i, j));
      if (curPiece == undefined) {
        availableMoves.push(Square.at(i, j));
      } else if (
        curPiece != undefined &&
        curPiece.player != this.player &&
        curPiece.constructor.name != "King"
      ) {
        availableMoves.push(Square.at(i, j));
        break;
      } else if (curPiece != undefined && curPiece.player == this.player) {
        break;
      }
    }
    //Forward Left Diagonal
    row = location.row + 1; //5
    col = location.col - 1; //3
    for (let i = row, j = col; i <= 7 && j >= 0; i++, j--) {
      let curPiece = board.getPiece(Square.at(i, j));
      if (curPiece == undefined) {
        availableMoves.push(Square.at(i, j));
      } else if (
        curPiece != undefined &&
        curPiece.player != this.player &&
        curPiece.constructor.name != "King"
      ) {
        availableMoves.push(Square.at(i, j));
        break;
      } else if (curPiece != undefined && curPiece.player == this.player) {
        break;
      }
    }

    //Backward Right Diagonal
    row = location.row - 1;
    col = location.col + 1;
    for (let i = row, j = col; i >= 0; i--, j++) {
      let curPiece = board.getPiece(Square.at(i, j));
      if (curPiece == undefined) {
        availableMoves.push(Square.at(i, j));
      } else if (
        curPiece != undefined &&
        curPiece.player != this.player &&
        curPiece.constructor.name != "King"
      ) {
        availableMoves.push(Square.at(i, j));
        break;
      } else if (curPiece != undefined && curPiece.player == this.player) {
        break;
      }
    }
    //Backward Left Diagonal
    row = location.row - 1;
    col = location.col - 1;
    for (let i = row, j = col; i > 0, j > 0; i--, j--) {
      let curPiece = board.getPiece(Square.at(i, j));
      if (curPiece == undefined) {
        availableMoves.push(Square.at(i, j));
      } else if (
        curPiece != undefined &&
        curPiece.player != this.player &&
        curPiece.constructor.name != "King"
      ) {
        availableMoves.push(Square.at(i, j));
        break;
      } else if (curPiece != undefined && curPiece.player == this.player) {
        break;
      }
    }
    return availableMoves;
  }
}
