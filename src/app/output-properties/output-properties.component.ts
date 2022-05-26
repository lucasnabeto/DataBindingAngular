import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from "@angular/core";

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

    @ViewChild("campoInput", { static: false })
    campoValorInput!: ElementRef; //O "!" permite que a variável seja criada sem ser inicializada com algum valor.

    constructor() {}

    ngOnInit(): void {}

    incrementaComViewChild() {
        this.campoValorInput.nativeElement.value++;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }

    incrementa() {
        this.valorContador++;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }

    decrementa() {
        this.valorContador--;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }

    decrementaComViewChild() {
        this.campoValorInput.nativeElement.value--;
        this.mudouValorContador.emit({ novoValor: this.valorContador });
    }
}
