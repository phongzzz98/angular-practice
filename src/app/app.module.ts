import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { TestPipesPipe } from './test-pipes.pipe';
import { InputModalComponent } from './input-modal/input-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentCompComponent,
    ChildCompComponent,
    TestPipesPipe,
    InputModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
