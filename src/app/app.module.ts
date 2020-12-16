import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { HeirarchyComponent } from './heirarchy/heirarchy.component';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {MatTreeModule} from '@angular/material/tree';


const routes: Routes = [
  { path: 'hierarchy', component: HeirarchyComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
    HeirarchyComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTreeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
