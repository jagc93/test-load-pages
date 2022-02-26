import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TestLoadPageRouting } from "./test-load-page-routing";
import { TestLoadPageComponent } from "./test-load-page/test-load-page.component";

@NgModule({
    declarations: [TestLoadPageComponent],
    imports: [CommonModule, TestLoadPageRouting]
})
export class TestLoadPageModule { }