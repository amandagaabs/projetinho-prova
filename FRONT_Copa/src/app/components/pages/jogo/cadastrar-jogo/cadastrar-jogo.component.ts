import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Selecao } from "src/app/models/selecao.model";
import { Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Component, OnInit } from "@angular/core";


@Component({
 selector: "app-cadastrar-jogo",
 templateUrl:"./cadastrar-jogo.component.html",
 styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  selecaoA? : Selecao;
  selecaoB? : Selecao;
  placar?: number;
  placarB?: number;
  selecaoAId! : number;


  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  cadastrar(): void {
    let selecao : Selecao = {
      id:this.selecaoAId,
      nome : ""
    }   
    let jogo : Jogo = {
      selecaoA : this.selecaoA,
      selecaoB : this.selecaoB,
      placar: 0,
      placarB :0,
    };
     console.log(jogo);
  }

//this.http
//.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo)
//.subscribe({
  //next: (funcionario) => {
    //this._snackBar.open("Jogo cadastrado!", "Ok!", {
      //horizontalPosition: "right",
      //verticalPosition: "top",
   // });
   // this.router.navigate(["pages/jogo/cadastrar"]);
  //},
  //error: (error) => {
    //console.error("Algum erro aconteceu!");
 // },
//});/
//}
//}
}
