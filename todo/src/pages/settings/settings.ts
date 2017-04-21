import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'
import { HelloIonicPage } from '../home/home'
import { SettingsService } from '../../services/settingsServices'
@Component({
    selector: 'settings',
    templateUrl: 'settings.html'
})

export class SettingsComponent implements OnInit {
    confirmDelete: boolean;
    quickToDo: boolean;
    constructor(private navController: NavController, private settingsService: SettingsService) {
        this.confirmDelete = this.settingsService.getConfirmationDelete();
        this.quickToDo = this.settingsService.getQuickToDO();
    }
    backButtonClick() {
        this.navController.setRoot(HelloIonicPage);
    }
    ngOnInit() { }
    toggleConfrimDelete() {
        this.settingsService.setConfirmationDelete(this.confirmDelete);
    }
    toggleQuickToDo(){
         this.settingsService.setQuickToDo(this.quickToDo);
    }
}