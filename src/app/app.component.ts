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
        }
    }

    selectPropertyBinding() {
        this.propertyBinding = true;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
    }
    selectClassStyleBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = true;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
    }
    selectEventBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = true;
        this.twoWayDataBinding = false;
    }
    selectTwoWayDataBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = true;
    }
}
