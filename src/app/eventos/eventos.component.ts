import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void{
    this.httpClient.get('https://localhost:5001/api/eventos').subscribe({
      next: (response) => {this.eventos = response},
      error: (error) => {console.log(error)}
  });

  
  }
}
