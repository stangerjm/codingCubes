import { Injectable } from '@angular/core';
import { Statement } from '../statement/statement';
import { Variable } from '../variable/variable';

@Injectable()
export class CcExecutorService {

  currentStatement: Statement;
  color: Array<Variable> = [];

  constructor() { }

  execute(statement: Statement){
    switch(statement.type){
      case "make":
        this.paintDom(statement.colNum, statement.rowNum, statement.color);
        break;
      case "var":
        this.color.push(new Variable(statement.name, this.removeBrackets(statement.color)));
        break;
      case "loop":
        break;
      default:
        alert("Oops! The beginning of your statement was not recognized. Try a 'make' statement, or try reading how to write a loop.");
    }
  }

  private paintDom(colNum, rowNum, color){
    let el = document.getElementById("cc-col" + colNum + "-row" + rowNum);
    let currColor;
    if(color.includes("{") && color.includes("}")){
      let varName = this.removeBrackets(color);
      try{
        currColor = this.color.filter(varColor => varColor.name == varName)[0].value;
      } catch(TypeError){
        alert("Oops! It looks like a variable you used does not exist. Check all of your variables and where you used them.")
      }
    } else {
      currColor = color;
    }

    try{
      el.style.backgroundColor = currColor;
    } catch(TypeError){
      alert("Oops! There was a problem with your code. Either your row and column numbers were out of bounds, or you spelled out the number rather than using the numeric value. Try again!");
    }
  }

  private removeBrackets(variable: string){
    return variable.replace("{", "").replace("}", "");
  }

}
