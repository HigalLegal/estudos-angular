import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  isAliveComponent = true

  aparecer(): void {
    this.isAliveComponent = true;
  }

  desaparecer(): void {
    this.isAliveComponent = false;
  }

}
