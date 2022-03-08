import { Component, OnInit } from '@angular/core';
import { EncryptedVariableService } from 'src/app/services/encrypted-variable/encrypted-variable.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';

@Component({
  selector: 'toolfordev-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: EncryptedVariableService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('name', 'Name'),
      new TableColumnDescription('value', 'Value')
    ];
  }

}
