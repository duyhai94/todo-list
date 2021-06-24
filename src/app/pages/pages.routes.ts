import { Routes } from "@angular/router";
import { TaskComponent } from "./task/task.component";

export const pagesRoutes : Routes = [
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  }
]
