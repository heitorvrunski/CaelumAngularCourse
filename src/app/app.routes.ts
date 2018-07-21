import { ListagemComponent } from './listagem/listagem.component';
import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

export const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: '' }
];
