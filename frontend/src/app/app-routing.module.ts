import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { PhotoNewComponent } from './photo/photo-new.component'
import { PhotoListComponent } from './photo/photo-list.component'
import { PhotoEditComponent } from './photo/photo-edit.component'



const routes: Routes = [

	{ path: '', component: HomepageComponent },
	{ path: 'photos/new', component: PhotoNewComponent },
	{ path: 'photos', component: PhotoListComponent },
	{ path: 'photo/:id', component: PhotoEditComponent },

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }