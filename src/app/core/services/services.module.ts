import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../constants/Material.module";
import { LogsService } from "./logs.service";
import { UserService } from "./user.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [],
    providers: [
        UserService,
        LogsService
    ]
})

export class ServicesModule {
}
