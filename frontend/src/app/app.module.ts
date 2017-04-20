import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ng2-modal";
import { AppRoutingModule } from './app.routing.module';

import { SearchPhotoPipe } from './_pipes/search-photo.pipe'

// Component
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotoNewComponent } from './photo/photo-new.component';
import { PhotoListComponent } from './photo/photo-list.component';
import { PhotoEditComponent } from './photo/photo-edit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

//service 

import { AuthenticationService } from './_services/authentication.sevice'
import { AuthGuard } from './_guards/auth.guard'
import { MessageService } from './_services/message.service'

import { RouterStateSnapshot } from '@angular/router';

@NgModule({
	declarations: [
		SearchPhotoPipe,
		AppComponent,
		HomepageComponent,
		PhotoNewComponent,
		PhotoListComponent,
		PhotoEditComponent,
		LoginComponent,
		LogoutComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ModalModule,
		AppRoutingModule
	],
	providers: [AuthGuard, AuthenticationService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
