import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BackendApiService } from '../../../../service/backendApiService';

export interface ListColumn<T> {
  name: string,
  title: string,
  dataMap: (data: T) => String | number 
}

@Component({
  selector: 'app-index-page',
  imports: [MatTableModule, MatButtonModule, RouterModule, MatIcon, MatDialogModule, MatPaginatorModule],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent implements OnInit{
  @Input() title: string = 'Index Page';
  @Input() listColumns: ListColumn<any>[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() resource: string = ''

  private backendApiService: BackendApiService;

  constructor(backendApiService: BackendApiService){
    this.backendApiService = backendApiService;
  }

  dataSource = [];
  pageSizeOptions = [5, 10, 25];
  pageLength = 100;

  totalPages = 0;
  currentPage = 1;

  getCreateRoute():string{
    return `create`;
  }

  getEditRoute(id: number){
    return `${id}/edit`
  }

  getShowRoute(id: number){
    return `${id}`
  }

  ngOnInit(): void {
    this.loadData();
  }

  onPage(event: PageEvent){
    this.backendApiService.list(this.resource, {page: event.pageIndex, per_page: event.pageSize}).then((data) => this.mapData(data));
  }

  delete(id: number){
    this.backendApiService.delete(this.resource, id).then(() => {
      this.loadData();
    });
  }

  loadData(){
    this.backendApiService.list(this.resource).then((data) => this.mapData(data));
  }

  mapData(data: any){
    this.dataSource = data.items;
    this.totalPages = data.totalPages;
    this.pageLength = data.total;
  }
}
