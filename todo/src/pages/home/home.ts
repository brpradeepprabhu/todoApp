import { Component } from '@angular/core';
import { SettingsService } from "../../services/settingsServices";
import { AlertController } from 'ionic-angular'
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'home.html'
})
export class HelloIonicPage {
  tasks: any;
  quickToDo: string;
  constructor(private settingService: SettingsService,private alertCtrl:AlertController) {
    this.tasks = [{ name: "pradeep" }, { name: "prabhu" }];
    this.quickToDo = ""
  }
  change(event, task) {

    var index = this.tasks.indexOf(task);
    console.log(index)
    console.log(event)
    if (this.settingService.alertOnDelete === true) {
      let confirm = this.alertCtrl.create({
        title: 'Delete Task?',
        message: 'Do you want to delete the task?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('No clicked');
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
    else{
    this.tasks.splice(index, 1);
    }
  }
  createTodo() {
    var task = { name: this.quickToDo };
    this.tasks.push(task);
  }
}
