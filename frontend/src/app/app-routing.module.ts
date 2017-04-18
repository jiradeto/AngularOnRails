import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { PhotoNewComponent } from './photo/photo-new.component'



const routes: Routes = [
	
	{ path: '', component: HomepageComponent },
	{ path: 'photos/new', component: PhotoNewComponent },
	
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }