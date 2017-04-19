import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomepageComponent } from './homepage/homepage.component';
import { PhotoNewComponent } from './photo/photo-new.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		PhotoNewComponent
	],
	imports: [
		Ng2BootstrapModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
