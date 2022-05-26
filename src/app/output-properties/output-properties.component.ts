import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-output-properties",
    templateUrl: "./output-properties.component.html",
    styleUrls: ["./output-properties.component.scss"],
})
export class OutputPropertiesComponent implements OnInit {
    @Input()
    valorContador: number = 0;

    @Output()
    mudouValorContador = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    incrementa() {
        this.valorContador++;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }

    decrementa() {
        this.valorContador--;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }
}
