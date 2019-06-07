import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

import {APP_CONFIG, AppConfig} from './configs/app.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [
        {provide: APP_CONFIG, useValue: AppConfig}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}

// https://github.com/Ismaestro/angular7-example-app/blob/master/src/app/app-routing.module.ts
