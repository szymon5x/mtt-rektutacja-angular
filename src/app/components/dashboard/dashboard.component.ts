import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  displayedInstructions: string[] = [
    'Create a "todo-list" component',
    'Register the todo-list component in module under `todo-list` route',
    'Create "todo-list" service',
    'Add a method to the service that retrieves data from endpoint https://gorest.co.in/public/v2/todos',
    'Display the data downloaded by the website in the created component',
    'Display date in "29-06-2022" format',
    'In DashboardComponent, combine "one" and "two" arrays. Remove duplicate elements. Display result ',
    'Count how many times each status downloaded by the website occurs. Display this data in todo-list.component.html'
  ];

  ngOnInit(): void {
    const one = ['1', '2', '3', '4', '5'];
    const two = ['6', '7', '2', '8', '5'];
  }
}
