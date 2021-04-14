import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, FormsModule],
    exports: [FooterComponent]
})
export class CoreModule{}