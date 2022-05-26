import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { ClassStyleBindingComponent } from "./class-style-binding/class-style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { FormsModule } from "@angular/forms";
import { InputPropertiesComponent } from "./input-properties/input-properties.component";
import { OutputPropertiesComponent } from './output-properties/output-properties.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyBindingComponent,
        ClassStyleBindingComponent,
        EventBindingComponent,
        TwoWayDataBindingComponent,
        InputPropertiesComponent,
        OutputPropertiesComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
