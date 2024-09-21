import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CarauselComponent } from './carausel/carausel.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    HomeComponent,
    CarauselComponent
  ],
  exports: [NavbarComponent, FooterComponent],
  bootstrap: []
})
export class AppModule { }