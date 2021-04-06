import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, FormsModule],
    exports: [HeaderComponent, FooterComponent]
})
export class CoreModule{}