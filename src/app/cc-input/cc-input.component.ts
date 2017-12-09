import { Component, OnInit } from '@angular/core';
import { CcParserService } from '../services/cc-parser.service';
import { CcExecutorService } from '../services/cc-executor.service';

@Component({
  selector: 'cc-input',
  templateUrl: './cc-input.component.html',
  styleUrls: ['./cc-input.component.css']
})
export class CcInputComponent implements OnInit {

  codeParser: CcParserService;
  codeExecutor: CcExecutorService;

  constructor(parser: CcParserService, executor: CcExecutorService) {
    this.codeParser = parser;
    this.codeExecutor = executor;
  }

  ngOnInit() {
  }

  selectElement(code){
    let rawStatements = this.codeParser.parseStatements(code);
    rawStatements.forEach(function(statement){
      let parsedStatement = this.codeParser.getStatement(statement);
      this.codeExecutor.execute(parsedStatement);
    }, this);
  }

}
