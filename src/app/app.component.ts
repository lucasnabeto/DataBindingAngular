import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    titulo = "DataBinding";

    propertyBinding: boolean = false;
    classStyleBinding: boolean = false;
    eventBinding: boolean = false;
    twoWayDataBinding: boolean = false;
    inputProperties: boolean = false;
    outputProperties: boolean = false;

    ngOnInit() {
        this.changeBindingType("property");
    }

    onMudouValor(evento: any) {
        console.log(evento.novoValor);
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
            case "input-properties":
                this.selectInputProperties();
                break;
            case "output-properties":
                this.selectOutputProperties();
                break;
        }
    }

    selectPropertyBinding() {
        this.propertyBinding = true;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputProperties = false;
        this.outputProperties = false;
    }

    selectClassStyleBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = true;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputProperties = false;
        this.outputProperties = false;
    }

    selectEventBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = true;
        this.twoWayDataBinding = false;
        this.inputProperties = false;
        this.outputProperties = false;
    }

    selectTwoWayDataBinding() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = true;
        this.inputProperties = false;
        this.outputProperties = false;
    }

    selectInputProperties() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputProperties = true;
        this.outputProperties = false;
    }

    selectOutputProperties() {
        this.propertyBinding = false;
        this.classStyleBinding = false;
        this.eventBinding = false;
        this.twoWayDataBinding = false;
        this.inputProperties = false;
        this.outputProperties = true;
    }
}
