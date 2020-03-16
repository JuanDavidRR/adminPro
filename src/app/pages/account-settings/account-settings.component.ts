import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
               public _settings: SettingsService ) { }

  ngOnInit(): void {
    this.setCheck()
  }

  changeColor( theme: string, link: any ){
    console.log(link);

    this.applyCheck( link );
    this._settings.applyTheme( theme );
  }

  applyCheck( link: any ){

    let selectors: any = document.getElementsByClassName( 'selector' );
    for( let i of selectors ){
      i.classList.remove('working');
    }

    link.classList.add('working');
  }

  setCheck(){
    let selectors: any = document.getElementsByClassName( 'selector' );
    let theme = this._settings.settings.theme;
    for(let i of selectors){
      if( i.getAttribute('data-theme') === theme ) {
        i.classList.add('working');
      }
    }
    }
  }
