import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';
import { SetorService } from './setor/setor.service';
import { ManutencaoComponent } from './setor/manutencao/manutencao.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/produto.service';
import { ManutencaoProdutoComponent } from './produto/manutencao/manutencao.component';

const appRoutes: Routes = [
  { path: 'app-setor', component: SetorComponent },
  { path: 'app-manutencao', component: ManutencaoComponent },
  { path: 'app-produto', component: ProdutoComponent },
  { path: 'app-manutencao-produto', component: ManutencaoProdutoComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SetorComponent,
    ManutencaoComponent,
    ProdutoComponent,
    ManutencaoProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [SetorService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
