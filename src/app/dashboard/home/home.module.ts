import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRouting } from "./home-routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRouting]
})
export class HomeModule { }