import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  onTypedName(updateName: string) {
    this.name = updateName;
  }

  onTypedName2(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
