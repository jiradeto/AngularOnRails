import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './_guards/auth.guard'

// component
import { HomepageComponent } from './homepage/homepage.component'
import { PhotoNewComponent } from './photo/photo-new.component'
import { PhotoListComponent } from './photo/photo-list.component'
import { PhotoEditComponent } from './photo/photo-edit.component'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'



const routes: Routes = [

	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: '', component: HomepageComponent },
	{ path: 'photos/new', component: PhotoNewComponent, canActivate: [AuthGuard] },
	{ path: 'photos', component: PhotoListComponent, canActivate: [AuthGuard] },
	{ path: 'photo/:id', component: PhotoEditComponent, canActivate: [AuthGuard] },
	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }