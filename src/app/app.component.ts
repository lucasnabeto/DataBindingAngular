import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "DataBinding";

    propertyBinding: boolean = false;
    classStyleBinding: boolean = false;
    eventBinding: boolean = false;
    twoWayDataBinding: boolean = false;
    inputOutputProperties: boolean = false;

    ngOnInit() {
        this.changeBindingType("property");
    }

    changeBindingType(bindingType: string) {
        switch (bindingType) {
            case "property":
                this.selectPropertyBinding();
                break;
            case "class-style":
                this.selectClassStyleBinding();
                break;
            case "event":
                this.selectEventBinding();
                break;
            case "two-way":
                this.selectTwoWayDataBinding();
                break;
            case "input-output-properties":
                this.selectInputOutputProperties();
        }
    }

    selectPropertyBinding() {
        this.propertyBinding = true;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputOutputProperties = false;
    }

    selectClassStyleBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = true;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputOutputProperties = false;
    }

    selectEventBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = true;
        this.twoWayDataBinding = false;
        this.inputOutputProperties = false;
    }

    selectTwoWayDataBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = true;
        this.inputOutputProperties = false;
    }

    selectInputOutputProperties() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputOutputProperties = true;
    }
}
