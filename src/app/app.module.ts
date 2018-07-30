import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { routes } from "./app.routes";
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "../app/sidebar/sidebar.component";
import { PageComponent } from "../app/page/page.component";
import { HeaderComponent } from "../app/page/header/header.component";
import { FooterComponent } from "../app/page/footer/footer.component";
import { SectionComponent } from "./page/section/section.component";
import { DefboardComponent } from "./page/section/defboard/defboard.component";
import { InputBoardComponent } from "./page/section/inputboard/inputboard.component";
import { ResultComponent } from "./page/section/result/result.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    DefboardComponent,
    InputBoardComponent,
    ResultComponent
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
