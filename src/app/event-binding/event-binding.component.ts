import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-event-binding",
    templateUrl: "./event-binding.component.html",
    styleUrls: ["./event-binding.component.scss"],
})
export class EventBindingComponent implements OnInit {
    valorDigitado: any = "";
    valorSalvo: any = "";

    isMouseOver: boolean = false;

    botaoClicado() {
        alert("Botão clicado!!!");
    }

    onKeyUp(evento: KeyboardEvent) {
        this.valorDigitado = (<HTMLInputElement>evento.target).value;
    }

    salvarValorDigitado(valor: any) {
        this.valorSalvo = valor;
    }

    onMouseOverOut() {
        this.isMouseOver = !this.isMouseOver;
    }

    constructor() {}

    ngOnInit(): void {}
}
