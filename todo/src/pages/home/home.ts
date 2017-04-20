import { Component } from '@angular/core';
import { SettingsService } from "../../services/settingsServices";
import { AlertController,NavController } from 'ionic-angular'
import {SettingsComponent} from '../settings/settings'
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'home.html'
})
export class HelloIonicPage {
  tasks: any;
  quickToDo: string;
  noClicked: boolean = false;
  constructor(private settingService: SettingsService, private alertCtrl: AlertController,private nav:NavController) {
    var storageList = localStorage.getItem("taskList");
    console.log("storage", storageList);
    this.tasks = (storageList == null) ? [] : JSON.parse(storageList);
    this.quickToDo = ""
  }
  change(event, task) {

    var index = this.tasks.indexOf(task);
    console.log(index)
    console.log(event)
    if (this.noClicked === false) {
      if (this.settingService.alertOnDelete === true) {
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
              }
            }
          ]
        });
        confirm.present();
      }
      else {
        this.tasks.splice(index, 1);
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
      localStorage.setItem("taskList", JSON.stringify(this.tasks));
    }
  }
  openPage(page) {
    this.nav.setRoot(SettingsComponent);
  }
}
