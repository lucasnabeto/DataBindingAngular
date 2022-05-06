import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-input-output-properties",
    templateUrl: "./input-output-properties.component.html",
    styleUrls: ["./input-output-properties.component.scss"],
    inputs: ["nomeDoCurso1:nome1", "nomeDoCurso2"], //Método 1 - Cada posição do array é uma variável interna sendo exposta para componentes externos.
})
export class InputOutputPropertiesComponent implements OnInit {
    nomeDoCurso1: string = "";
    nomeDoCurso2: string = "";

    //Método 2 - O valor escrito dentro do decorator é o nome da variável que fica exposto para componentes externos:
    @Input("nome2")
    nomeDoCurso3: string = ""; //Nome interno da variável.

    //Método 3 - O nome interno da variável é o mesmo nome que fica exposto para componentes externos:
    @Input()
    nomeDoCurso4: string = ""; //Nome interno e externo da variável.

    constructor() {}

    ngOnInit(): void {}
}
