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

    for (let i = location.col - 1; i >= 0; i--) {
      let curPiece = board.getPiece(Square.at(location.row, i));

      if (curPiece == undefined) {
        rookAvailableMoves.push(Square.at(location.row, i));
      }
      
      else  {break}
      }
      
     
    for (let i = location.col +1; i <= 7; i++) {
      let curPiece = board.getPiece(Square.at(location.row, i));
      if (curPiece == undefined) {
        rookAvailableMoves.push(Square.at(location.row, i));
      }

      else  {break}
      
     
    }
    for (let i = location.row +1; i <= 7 ; i++) {
      let curPiece = board.getPiece(Square.at(i, location.col));
      if (curPiece == undefined) {

        rookAvailableMoves.push(Square.at(i, location.col));
      }

      else  {break}
      
    }
    for (let i = location.row - 1; i >= 0; i--) {
      let curPiece = board.getPiece(Square.at(i, location.col));
      if (curPiece == undefined) {
        rookAvailableMoves.push(Square.at(i, location.col));
        
      }
      else {
        break;
    }
      }
      

    return rookAvailableMoves;
  }
}
