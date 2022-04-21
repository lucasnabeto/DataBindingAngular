import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-two-way-data-binding",
    templateUrl: "./two-way-data-binding.component.html",
    styleUrls: ["./two-way-data-binding.component.scss"],
})
export class TwoWayDataBindingComponent implements OnInit {
    nome1: string = "Ana";
    nome2: string = "Carlos";
    nome3: string = "Victor";
    nome4: string = "Zakk";

    pessoa = {
        nome: "Lucas",
        idade: 27,
    };

    constructor() {}

    ngOnInit(): void {}
}
