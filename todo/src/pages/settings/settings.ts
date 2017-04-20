import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'
import { HelloIonicPage } from '../home/home'
@Component({   
    selector: 'settings',
    templateUrl: 'settings.html'
})

export class SettingsComponent implements OnInit {
    constructor(private navController:NavController) { }
    backButtonClick(){       
         this.navController.setRoot(HelloIonicPage);
    }
    ngOnInit() { }
}