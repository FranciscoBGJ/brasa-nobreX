import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { Sobre } from "./pages/sobre/sobre";

@Component({
  selector: 'app-root',
  imports: [Home, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('brasa-nobreX');
}
