import { HttpClient } from "@angular/common/http";
import { Jogo } from "src/app/models/jogo.model";
import { Component, OnInit } from "@angular/core";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-listar-jogo",
  templateUrl: "./listar-jogo.component.html",
  styleUrls: ["./listar-jogo.component.css"],
})
export class ListarJogoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.
      get<Jogo[]>(
        "https://localhost:5001/api/jogo/listar"
      )
      .subscribe({
        next: (jogo) =>{
          //this.jogo = jogo;

        }
  });

}
}
