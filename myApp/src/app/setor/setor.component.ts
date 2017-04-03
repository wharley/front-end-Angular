import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SetorService } from './setor.service';
import { Setor } from './setor';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {
  
  public setores: Setor[];
  filtro: string;
  private errorMessage: string;

  constructor(private service: SetorService, private router: Router) { }

  ngOnInit() {
    this.onLoad()
  }

  onLoad() {

      this.service.getSetor()
                  .subscribe(data => this.setores = data,
                  error => this.errorMessage = <any>error);    
  }

  addSetor() {
    this.router.navigate(['/app-manutencao'])
  }

  editSetor(setor) {
      this.router.navigate(['/app-manutencao', {id: setor.id}])
  }

  delSetor(setor) {
     if (confirm("Deseja excluir o setor " + setor.id + "?")) {
        this.service.delSetor(setor)
                .subscribe(data => {
                    if(data){
                        alert("Registro excluído com sucesso")
                        this.onLoad()
                    }else{
                        alert("Registro nao foi excluído")
                    }                    
                }, error => this.errorMessage = <any>error)
    }
  }  

  obterSetores() {

    if(this.setores === undefined || this.filtro === undefined || this.filtro.trim() === '' ) {
      return this.setores
    }

    return this.setores.filter((setor) => {

      if (setor.descricao.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ) {
        return true
      } else {
        return false
      }
    })

  }

}
