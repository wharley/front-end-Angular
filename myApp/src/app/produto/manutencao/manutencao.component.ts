import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { ProdutoService } from '../produto.service';
import { SetorService } from '../../setor/setor.service';
import { Produto } from '../produto';
import { Setor } from '../../setor/setor'

@Component({
  selector: 'app-manutencao-produto',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoProdutoComponent implements OnInit {

  public model: Produto;
  public setores: Setor[];
  private isNew: boolean = true;
  private subscription: Subscription;
  private errorMessage: string;    

  constructor(private service: ProdutoService, private setorService: SetorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.model = new Produto();

    this.onGetSetores()    

    this.subscription = this.route.params.subscribe((params: any) => {

        if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.service.getProdutoId(params['id'])
                  .subscribe(data => this.model = data[0],
                  error => this.errorMessage = <any>error);
        } else {
            this.isNew = true;            
        }

      } 
    )    
  }

  onGetSetores() {
      
    return this.setorService.getSetor()
                  .subscribe(data => this.setores = data,
                  error => this.errorMessage = <any>error);    
  }

  save() {

    let alerta = "Registro gravado com sucesso!";
    let alError = "Verificar os dados, não foi gravado";

    if(this.isNew){
        this.service.saveProduto(this.model)
                .subscribe(data => {

                    if(data){
                        alert(alerta)
                        this.router.navigate(['/app-produto'])
                    }else{
                        alert(alError)
                    }
                }, error => this.errorMessage = <any>error)
    }else{
        this.service.updateProduto(this.model)
                .subscribe(data => {
                    if(data){
                        alert(alerta)
                        this.router.navigate(['/app-produto'])
                    }else{
                        alert(alError)
                    }
                }, error => this.errorMessage = <any>error)
    } 
  }

  cancel() {
    this.router.navigate(['/app-produto'])
  }   

}
