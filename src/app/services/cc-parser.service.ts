import { Injectable } from '@angular/core';
import { Statement } from '../statement/statement';

@Injectable()
export class CcParserService {

  statementTypes = ["make", "loop", "var"];

  constructor() { }

  parseStatements(code: string){
    let statements = [];
    code.split(";").forEach(function(statement){
      if(statement !== ""){
        statements.push(statement.trim());
      }
    });
    return statements;
  }

  getStatement(code: string){
    let type = this.getType(code);
    let value = null;
    let endCol = -1;
    let endRow = -1;
    let colNum;
    let rowNum;
    if(type === "var"){
      value = this.getVarName(code);
    }
    if(type === "loop"){
      let snippet = code.substring(code.indexOf("(") + 1, code.indexOf(")")).split("to");
      if(snippet.length === 2){
        colNum = this.getCellNumber(snippet[0], "col");
        rowNum = this.getCellNumber(snippet[0], "row");
        endCol = this.getCellNumber(snippet[1], "col");
        endRow = this.getCellNumber(snippet[1], "row");
      } else{
        alert("Error! Your loop contained too many or too few values in between the parenthesis. Try again!");
      }
    } else{
      colNum = this.getCellNumber(code, "col");
      rowNum = this.getCellNumber(code, "row");
    }
    let color = this.getColor(code);
    return new Statement(type, rowNum, colNum, color, value, endCol, endRow);
  }

  private getVarName(statement: string){
    let stmt = statement.split(" ");
    return stmt[stmt.indexOf("var") + 1];
  }

  private getType(statement: string){
    if(!statement){
      return "none"
    }
    let type = statement.split(" ")[0];
    if(this.statementTypes.indexOf(type) !== -1){
      return type;
    }

    return "none";
  }

  private getColor(statement: string){
    if(!statement){
      return "noColor";
    }
    let stmt = statement.split(" ");
    return stmt[stmt.length - 1];
  }

  private getCellNumber(statement: string, numType: string){
    if(!statement){
      return -1;
    }
    let code = statement.split(" ");
    let colNum = code[code.indexOf(numType) + 1];
    return isNaN(parseInt(colNum)) ? -1 : parseInt(colNum);
  }
}
