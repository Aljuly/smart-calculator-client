import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { DataService } from './_services/data.service';
import { ComunicationService } from './_services';
import { AlertService, AuthenticationService, UserService } from './_services';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DivisionFormatterComponent } from './page/section/result/division-formatter';
import { MultiplycationFormatterComponent } from './page/section/result/multiplycation-formatter';
import { AdditionComponent } from './page/section/result/addition-component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    ResultComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    DivisionFormatterComponent,
    MultiplycationFormatterComponent,
    AdditionComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' },
    DataService,
    ComunicationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
