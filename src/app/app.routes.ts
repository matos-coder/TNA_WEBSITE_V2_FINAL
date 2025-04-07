import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    { path: 'about', component: AboutUsComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'service/:type', component: ServicesComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactUsComponent },
];
