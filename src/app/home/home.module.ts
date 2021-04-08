import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SobreCampanhaComponent } from './sobre-campanha/sobre-campanha.component';

@NgModule({
    declarations: [HomeComponent, SobreCampanhaComponent],
    imports: [CommonModule, FormsModule, HomeRoutingModule]
})
export class HomeModule{}
