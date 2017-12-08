import { Injectable } from '@angular/core';

@Injectable()
export class CcParserService {

  statementTypes = ["make", "loop", "var"];

  constructor() { }

  parseStatements(code: String){
    let statements = [];
    code.split(";").forEach(function(statement){
      if(statement !== ""){
        statements.push(statement.trim());
      }
    });
    return statements;
  }

  getType(statement: String){
    if(!statement){
      return "none"
    }
    let type = statement.split(" ")[0];
    if(this.statementTypes.indexOf(type) !== -1){
      return type;
    }

    return "none";
  }

  getColor(statement: String){
    if(!statement){
      return "noColor";
    }
    let stmt = statement.split(" ");
    return stmt[stmt.length - 1];
  }

  getRowNumber(statement: String){
    if(!statement){
      return -1;
    }
  }
}
