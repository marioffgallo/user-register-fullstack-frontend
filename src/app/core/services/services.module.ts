import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../constants/Material.module";
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
    ]
})

export class ServicesModule {
}
