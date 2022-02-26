import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestLoadPageComponent } from "./test-load-page/test-load-page.component";

const routes: Routes = [
    { path: '', component: TestLoadPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestLoadPageRouting { }