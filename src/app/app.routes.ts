import { Routes } from '@angular/router';
import { SignInComponent } from '../UI-Structure/user_auth_services/sign-in/sign-in.component';
import { SignUpComponent } from '../UI-Structure/user_auth_services/sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'paypal', loadComponent: () => import('../UI-Structure/payment_apis/paypal/paypal.component').then(standalonecomponent => standalonecomponent.PaypalComponent).catch() },
    { path: 'mpesa', loadComponent: () => import('../UI-Structure/payment_apis/mpesa/mpesa.component').then(standalonecomponent => standalonecomponent.MpesaComponent).catch() },
    { path: 'stripe', loadComponent: () => import('../UI-Structure/payment_apis/stripe/stripe.component').then(standalonecomponent => standalonecomponent.StripeComponent).catch() }
];
