export class Statement {
  constructor(public type: string, public rowNum: number, public colNum: number, public color: string, public name: string = null, public endCol: number = -1, public endRow: number = -1){}
}
