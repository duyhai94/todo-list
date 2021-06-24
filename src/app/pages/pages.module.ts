import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardTodoModule } from "../components/card-todo/card-todo.component";
import { NewTaskModule } from "../components/new-task/new-task.component";
import { PagesComponent } from "./pages.component";
import { pagesRoutes } from "./pages.routes";
import { TaskComponent } from "./task/task.component";

@NgModule({
  declarations: [PagesComponent,TaskComponent],
  imports: [CommonModule,RouterModule.forChild(pagesRoutes),NewTaskModule,CardTodoModule],
  exports: [PagesComponent,TaskComponent]
})
export class PagesModule {}
