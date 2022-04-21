import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-property-binding",
    templateUrl: "./property-binding.component.html",
    styleUrls: ["./property-binding.component.scss"],
})
export class PropertyBindingComponent implements OnInit {
    url: string = "http://www.google.com";
    urlImagem =
        "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg";

    getValor() {
        return 1;
    }

    constructor() {}

    ngOnInit(): void {}
}
