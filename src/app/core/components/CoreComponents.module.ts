// General
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Material
import { MaterialModule } from 'src/app/core/constants/Material.module';

// Footer
import { CopyrightComponent } from './copyright/copyright.component';

// Currency
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// Generic Alert
import { AlertComponent } from './alert/alert.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    //Alert
    AlertComponent,

    //Footer
    CopyrightComponent,
  ],
  imports: [
    //General
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    //Alert
    AlertComponent,

    //Footer
    CopyrightComponent,
  ],
  entryComponents: [AlertComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class CoreComponentsModule {}
