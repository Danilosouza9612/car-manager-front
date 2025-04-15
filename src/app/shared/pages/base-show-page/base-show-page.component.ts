import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../../../service/backendApiService';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: ''
})
export abstract class BaseShowPageComponent<T> implements OnInit{
  data: T = {} as T;
  constructor(protected api: BackendApiService, protected activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.api.get(this.resource, params['id']).then((data) => {
        this.data = data;
      });
    });
  }

  abstract get resource(): string;
}