import { Component, inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BackendApiService } from '../../../../service/backendApiService';

export interface ListColumn<T> {
  name: string,
  title: string,
  dataMap: (data: T) => String | number 
}

@Component({
  template: ''
})
export abstract class IndexPageComponent implements OnInit{
  abstract get resource(): string;
  abstract get listColumns(): ListColumn<any>[];
  abstract get displayedColumns(): string[];
  abstract get api(): BackendApiService;

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
    this.api?.list({page: event.pageIndex, per_page: event.pageSize}).then((data: any) => this.mapData(data));
  }

  delete(id: number){
    this.api?.delete(id).then(() => {
      this.loadData();
    });
  }

  loadData(){
    this.api?.list().then((data: any) => this.mapData(data));
  }

  mapData(data: any){
    this.dataSource = data.items;
    this.totalPages = data.totalPages;
    this.pageLength = data.total;
  }
}
