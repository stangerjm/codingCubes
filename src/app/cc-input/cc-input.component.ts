import { Component, OnInit } from '@angular/core';
import { CcParserService } from '../cc-parser.service';
import { Statement } from '../statement/statement';

@Component({
  selector: 'cc-input',
  templateUrl: './cc-input.component.html',
  styleUrls: ['./cc-input.component.css']
})
export class CcInputComponent implements OnInit {

  codeParser: CcParserService;

  constructor(parser: CcParserService) {
    this.codeParser = parser;
  }

  ngOnInit() {
  }

  selectElement(code){
    let rawStatements = this.codeParser.parseStatements(code);
    let statements = [];
    rawStatements.forEach(function(statement){
      let type = this.codeParser.getType(statement);
      let color = this.codeParser.getColor(statement);
      statements.push(new Statement(type, 1, 1, color));
    }, this);
    console.log(statements);
    let el = document.getElementById("cc-col1-row1");
    el.style.backgroundColor = code;
  }

}
