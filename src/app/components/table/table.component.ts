import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'toolfordev-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public service: ApiService;
  @Input() public tableColumnDescriptions: TableColumnDescription[];
  @Input() public idFormControlName: string;
  @Input() public reportName: string;
  @Input() public enableFilter: boolean;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[];
  public dataSource = new MatTableDataSource<any>();

  constructor() {
    this.displayedColumns = new Array();
  }

  ngOnInit() {
    this.setDisplayedColumns();

    this.service.list().subscribe((response) => {
      if (this.reportName == null) {
        this.dataSource.data = response;
      } else {
        this.dataSource.data = response[this.reportName];
      }

      this.tableColumnDescriptions.forEach((tableColumnDescription) => {
        if (tableColumnDescription.service != null) {
          for (let i = 0; i < this.dataSource.data.length; i++) {
            tableColumnDescription.service.read(this.dataSource.data[i][tableColumnDescription.name]).subscribe((reponse) => {
              this.dataSource.data[i][tableColumnDescription.name] = reponse['data'][tableColumnDescription.serviceAttributeName]
            });
          }
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private setDisplayedColumns(): void {
    for (let i = 0; i < this.tableColumnDescriptions.length; i++) {
      this.displayedColumns[i] = this.tableColumnDescriptions[i].name;
    }
    this.displayedColumns[this.tableColumnDescriptions.length] = 'actions';
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}



export class TableColumnDescription {

  constructor(
    public name: string,
    public label: string,
    public service?: ApiService,
    public serviceAttributeName?: string,
  ) {

  }
}
