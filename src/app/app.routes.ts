import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VoteComponent} from "./pages/vote/vote.component";

export const routes: Routes = [
  { path: '', component: VoteComponent, pathMatch: 'full' }
];
