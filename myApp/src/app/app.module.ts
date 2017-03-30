import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';
import { SetorService } from './setor/setor.service';

const appRoutes: Routes = [
  { path: 'app-setor', component: SetorComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SetorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [SetorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
