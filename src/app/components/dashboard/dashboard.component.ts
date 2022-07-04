import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  displayedInstructions: string[] = [
    'Stwórz serwis "todo-list"',
    'Dodaj w serwisie metodę pobierającą dane z endpointu https://gorest.co.in/public/v2/todos',
    'Wyświetl w TodoListComponent dane pobierane przez serwis',
    'Dodaj funkcję trackBy',
    'Sformatuj datę do postaci "29-06-2022"',
    'Policz ile razy występuje każdy z pobieranych przez serwis statusów. Wyświetl te dane w todo-list.component.html',
    'W komponencie DashboardComponent połącz tablice "one" oraz "two" usuwając powtarzające się elementy. Wyświetl wynik',
    'Dodaj resolver dla danych pobieranych przez serwis. Załaduj je w komponencie przed wejściem na ścieżkę',
    'Dodaj cache do pobieranych przez serwis danych',
    'Dopisz test sprawdzający pobieranie i wyświetlanie danych w TodoListComponent',
    'W DashboardComponent przenieś logikę łączenia tablic do osobnej funkcji. Napisz test sprawdzający poprawność jej działania'
  ];

  ngOnInit(): void {
    const one = ['1', '2', '3', '4', '5'];
    const two = ['6', '7', '2', '8', '5'];
  }
}
