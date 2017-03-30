import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SetorService } from './setor.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {
  
  private setores: any;
  private errorMessage: string;

  constructor(private service: SetorService, private router: Router) {
      
      this.onLoad()

  }

  ngOnInit() {
  }

  onLoad() {

      this.service.getSetor()
                  .subscribe(data => this.setores = data,
                  error => this.errorMessage = <any>error);    
  }

}
