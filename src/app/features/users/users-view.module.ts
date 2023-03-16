import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CoreComponentsModule } from "src/app/core/components/CoreComponents.module";
import { MaterialModule } from "src/app/core/constants/Material.module";
import { ServicesModule } from "src/app/core/services/services.module";
import { InputsModule } from "src/app/shared/components/inputs/inputs.module";
import { AllUsersLogsTableModule } from "./components/all-users-logs-table/all-users-logs-table.module";
import { PopUpLogDetailsModule } from "./components/pop-up-log-details/pop-up-log-details.module";
import { UserRegisterPage } from "./pages/user-register-page/user-register-page.component";
import { UserLogsPage } from "./pages/users-logs-page/users-logs-page.component";

@NgModule({
    declarations: [
        UserLogsPage,
        UserRegisterPage
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
        AllUsersLogsTableModule,
        PopUpLogDetailsModule,
    ],
    exports: [
        UserRegisterPage,
        UserLogsPage
    ],
    providers: [
    ],
})

export class UsersViewModule {
}
