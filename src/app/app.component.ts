import { Component } from '@angular/core';
import { SettingsService, SidebarService, SharedService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';

  //Inyectando el servicio de ajuste de color en mi apliación al iniciar la app
  constructor( private _settings: SettingsService ){

  }

}
