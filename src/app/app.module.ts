import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import{NgxWebstorageModule} from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorResponseService } from './error-response/error-response.service';
import { ErrorResponseComponent } from './error-response/error-response/error-response.component';
import { AuthheaderInterceptor } from './http-interceptors';
import { PaginationModule } from './pagination/pagination.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ErrorResponseComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NgxWebstorageModule.forRoot(),
    PokemonModule,
    HttpClientModule,
    PaginationModule,
    BrowserAnimationsModule
  ],
  providers: [NgxWebstorageModule,ErrorResponseService,SharedService,{provide:HTTP_INTERCEPTORS,useClass:AuthheaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
