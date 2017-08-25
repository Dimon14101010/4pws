import {Routes} from "@angular/router";
import {EnterPageComponent} from "./enter-page/enter-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {path: '', component: EnterPageComponent},
  {path: 'dashboard' , component: DashboardComponent}
]


