import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';    
import { AppRoutingModule } from './app-routing.module';    
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';    

@NgModule({    
  declarations: [    
    AppComponent, HomeComponent, HelpComponent, TermsComponent,        
  ],    
  imports: [    
    BrowserModule,    
    AppRoutingModule,        
  ],    
  providers: [],    
  bootstrap: [AppComponent]    
})    

export class AppModule { }
