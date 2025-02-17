import { Routes } from '@angular/router';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },{
        path:'home',
        component:ProductGridComponent
    },
    { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
    { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'feedback', component: FeedbackComponent },
];
