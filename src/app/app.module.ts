import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithDefaultComponent } from './with-default/with-default.component';
import { WithOnPushComponent } from './with-on-push/with-on-push.component';
import { LazyWrapperComponent } from './lazy-wrapper/lazy-wrapper.component';
import { PocModule } from './pocitadlo/poc.module';
@NgModule({
  declarations: [
    AppComponent,
    WithDefaultComponent,
    WithOnPushComponent,
    LazyWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PocModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
