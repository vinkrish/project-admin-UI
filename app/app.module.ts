import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule  } 	from '@angular/platform-browser';
import { HttpModule } 		from '@angular/http';
import { routing } 			from './app.routes';
import { AppComponent }     from './app.component';
import { myComponents }     from './external.module'
import { myServices }       from './external.module'

@NgModule({
	bootstrap:    [AppComponent],
	imports:      [BrowserModule, HttpModule, routing, FormsModule],
    declarations: [
    	...myComponents
    ],
    providers: [
    	...myServices
  ]
})

export class AppModule {}