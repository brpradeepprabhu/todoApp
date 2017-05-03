import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'
import { HomePage } from '../home/home
@Component({
    selector: 'CreateCategory',
    templateUrl: 'createCategory.html'
})

export class CreateCategory implements OnInit {
    constructor(private navController:NavController) { }

    ngOnInit() { }
    backButtonClick() {
        this.navController.setRoot(HomePage);
    }
}