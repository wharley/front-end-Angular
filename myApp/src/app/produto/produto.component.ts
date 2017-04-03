import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProdutoService } from './produto.service';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produtos: Produto[];
  filtro: string;
  private errorMessage: string;  

  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.onLoad()
  }

  onLoad() {

      this.service.getProduto()
                  .subscribe(data => this.produtos = data,
                  error => this.errorMessage = <any>error);    
  }

  addProduto() {
    this.router.navigate(['/app-manutencao'])
  }

  editProduto(produto) {
      this.router.navigate(['/app-manutencao', {id: produto.id}])
  }

  delProduto(produto) {
     if (confirm("Deseja excluir o setor " + produto.id + "?")) {
        this.service.delProduto(produto)
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

  obterProdutos() {

    if(this.produtos === undefined || this.filtro === undefined || this.filtro.trim() === '' ) {
      return this.produtos
    }

    return this.produtos.filter((produto) => {

      if (produto.descricao.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ) {
        return true
      } else {
        return false
      }
    })

  }  

}
