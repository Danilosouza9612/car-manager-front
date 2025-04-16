import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from '../../../../service/backendApiService';

@Component({
    template: ''
})
export abstract class BaseShowPageComponent<T> implements OnInit{
  data: T = {} as T;
  api: BackendApiService;
  constructor(protected activatedRoute: ActivatedRoute, classRef: Function) {
    this.api = inject(classRef);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.api.get(params['id']).then((data: any) => {
        this.data = data;
      });
    });
  }

  abstract get resource(): string;
}