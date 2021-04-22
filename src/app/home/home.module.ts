import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,   
        FormsModule, 
        HomeRoutingModule, 
        ReactiveFormsModule, 
        RouterModule
    ]
})
export class HomeModule { }
