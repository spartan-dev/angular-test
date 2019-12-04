import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //angular decorator 
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({   // kind of configuration module for all components cada componente debe de registrarse 
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
