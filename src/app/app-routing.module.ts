import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./components/search/search.component";


    const routes:Routes=[
      {path:'',redirectTo:'home',pathMatch: 'full'},
      {path:'home',component:SearchComponent}
    ]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}