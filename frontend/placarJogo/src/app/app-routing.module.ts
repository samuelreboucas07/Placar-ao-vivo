import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MenuSharedComponent } from './main/menu-shared/menu-shared.component';
import { DetailsMatchComponent } from './details/details-match/details-match.component';
import { HomeAdminComponent } from './main/home-admin/home-admin.component';

const routes: Routes = [
{ 
	path: 'home',
	component: MenuSharedComponent,
	children: 
	[
	{
		path: '',
		component: HomeComponent,
		outlet: 'content'
	},
	{
		path: 'details',
		component: DetailsMatchComponent,
		outlet: 'content'
	},
	{
		path: 'admin',
		component: HomeAdminComponent,
		outlet: 'content'
	}

	]
},
	{path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
