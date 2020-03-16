import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeURL: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.upLoadSettings()
   }


saveSettings() {
  localStorage.setItem('settings', JSON.stringify( this.settings ));
}

upLoadSettings(){

  if ( localStorage.getItem('settings') ){
    this.settings = JSON.parse(localStorage.getItem('settings'));

    this.applyTheme( this.settings.theme );

  }
    else {
      console.log('Defecto')
      this.applyTheme( this.settings.theme );
    }
}

applyTheme( theme: string ){
  let url = `assets/css/colors/${theme}.css`
  this._document.getElementById('theme').setAttribute('href', url );

  this.settings.theme = theme;
  this.settings.themeURL = url;

  this.saveSettings();
}

}

interface Settings {
  themeURL: string;
  theme: string;
}
