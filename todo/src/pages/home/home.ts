import { Component } from '@angular/core';
import { SettingsService } from "../../services/settingsServices";
import { AlertController,NavController } from 'ionic-angular'
import {SettingsComponent} from '../settings/settings'
import {StorageService} from '../../services/storageService'
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'home.html'
})
export class HelloIonicPage {
  tasks: any;
  quickToDo: string;showQuickToDo:boolean;
  noClicked: boolean = false;
  constructor(private storageService:StorageService,private settingService: SettingsService, private alertCtrl: AlertController,private nav:NavController) {
    var storageList = this.storageService.getTaskList();
    console.log("storage", storageList);
    this.tasks = (storageList == null) ? [] : storageList;
    this.quickToDo = "";
    this.showQuickToDo = this.settingService.getQuickToDO();
  }
  change(event, task) {

    var index = this.tasks.indexOf(task);
    console.log(index)
    console.log(event)
    if (this.noClicked === false) {
      if (this.settingService.confirmationDelete === true) {
        let confirm = this.alertCtrl.create({
          title: 'Delete Task?',
          message: 'Do you want to delete the task?',
          buttons: [
            {
              text: 'No',
              handler: () => {

                this.noClicked = true;
                event.checked = false;
              }
            },
            {
              text: 'Yes',
              handler: () => {
                this.tasks.splice(index, 1);
                this.storageService.setTaskList(this.tasks);

              }
            }
          ]
        });
        confirm.present();
      }
      else {
        this.tasks.splice(index, 1);
        this.storageService.setTaskList(this.tasks);
      }
    }
    else {
      this.noClicked = false;
    }
  }
  createTodo() {
    if (this.quickToDo.trim() === "") {
      let alertBox = this.alertCtrl.create({
        title: 'Empty Task',
        subTitle: 'Please add a title to create a task?',
        buttons: ['OK']
      });
      alertBox.present();
    }
    else {
      var task = { name: this.quickToDo };
      this.tasks.push(task);
      this.quickToDo="";
      this.storageService.setTaskList(this.tasks);

    }
  }
  openPage(page) {
    this.nav.setRoot(SettingsComponent);
  }
}
