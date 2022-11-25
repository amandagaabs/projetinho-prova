import { Component, OnInit } from "@angular/core";
import { Jogo } from "src/app/models/jogo.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  jogos?: Jogo[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Jogo[]>("https://localhost:5001/api/jogo/listar")
    //Executar a requisição
    .subscribe({
      next: (jogos) => {
        this.jogos = jogos;
      }
    });

  }
}
