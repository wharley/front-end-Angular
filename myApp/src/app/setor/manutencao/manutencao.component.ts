import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { SetorService } from '../setor.service';
import { Setor } from '../setor';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent implements OnInit {

  public model: Setor;
  private isNew: boolean = true;
  private subscription: Subscription;
  private errorMessage: string;  

  constructor(private service: SetorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.model = new Setor();

    this.subscription = this.route.params.subscribe((params: any) => {

        if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.service.getSetorId(params['id'])
                  .subscribe(data => this.model = data[0],
                  error => this.errorMessage = <any>error);
        } else {
            this.isNew = true;            
        }

      } 
    )
  }

  save() {

    let alerta = 'Registro gravado com sucesso!';
    let alError = 'Verificar os dados, não foi gravado';

    if(this.isNew){
        this.service.saveSetor(this.model)
                .subscribe(data => {
                    if(data){
                        alert(alerta)
                        this.router.navigate(['/app-setor'])
                    }else{
                        alert(alError)
                    }
                }, error => this.errorMessage = <any>error)
    }else{
        this.service.updateSetor(this.model)
                .subscribe(data => {
                    if(data){
                        alert(alerta)
                        this.router.navigate(['/app-setor'])
                    }else{
                        alert(alError)
                    }
                }, error => this.errorMessage = <any>error)
    }
    
  }

  cancel() {
    this.router.navigate(['/app-setor'])
  }

}
