import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SectionComponent } from './page/section/section.component';
import { DefboardComponent } from './page/section/defboard/defboard.component';
import { InputBoardComponent } from './page/section/inputboard/inputboard.component';
import { ResultComponent } from './page/section/result/result.component';
import { DataService} from './service/data.service';

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
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
