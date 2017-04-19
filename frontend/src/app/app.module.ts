import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ng2-modal";
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotoNewComponent } from './photo/photo-new.component';
import { PhotoListComponent } from './photo/photo-list.component';
import { PhotoEditComponent } from './photo/photo-edit.component';


@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		PhotoNewComponent,
		PhotoListComponent,
		PhotoEditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ModalModule,
		AppRoutingModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
