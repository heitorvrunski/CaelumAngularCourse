import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './card/card.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      ListagemComponent,
      CadastroComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      FotoModule,
      CardModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
