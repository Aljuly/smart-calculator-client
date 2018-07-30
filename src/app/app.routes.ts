import { Routes } from "@angular/router";

import { SectionComponent } from "./page/section/section.component";

export const routes: Routes = [
  { path: "operation/:id", component: SectionComponent }
];
