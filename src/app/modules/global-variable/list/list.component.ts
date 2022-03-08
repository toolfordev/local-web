import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable/global-variable.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';

@Component({
  selector: 'toolfordev-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: GlobalVariableService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('name', 'Name'),
      new TableColumnDescription('value', 'Value')
    ];
  }

}
