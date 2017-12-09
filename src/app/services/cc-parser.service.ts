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
    if(type === "var"){
      value = this.getVarName(code);
    }
    let color = this.getColor(code);
    let colNum = this.getCellNumber(code, "col");
    let rowNum = this.getCellNumber(code, "row");
    return new Statement(type, rowNum, colNum, color, value);
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
