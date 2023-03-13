import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CoreComponentsModule } from "src/app/core/components/CoreComponents.module";
import { MaterialModule } from "src/app/core/constants/Material.module";
import { ServicesModule } from "src/app/core/services/services.module";
import { InputsModule } from "src/app/shared/components/inputs/inputs.module";
import { UserRegisterComponent } from "./pages/user-register-page/user-register-page.component";

@NgModule({
    declarations: [
        UserRegisterComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CoreComponentsModule,
        InputsModule,
        ServicesModule,
    ],
    exports: [
        UserRegisterComponent
    ],
    providers: [
    ],
})

export class UsersViewModule {
}
