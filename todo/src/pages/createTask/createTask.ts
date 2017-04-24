import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'
import { HomePage } from '../home/home'
import { StorageService } from '../../services/storageService'
@Component({
    selector: 'createtask',
    templateUrl: 'createtask.html'
})

export class CreateTaskComponent implements OnInit {
    task: string;
    tasks: any;
    constructor(private navController: NavController, private alertCtrl: AlertController, private storageService: StorageService) {
        var storageList = this.storageService.getTaskList();
        console.log("storage", storageList);
        this.tasks = (storageList == null) ? [] : storageList;
    }
    ngOnInit() { }
    backButtonClick() {
        this.navController.setRoot(HomePage);
    }
    toDoTask() {
        if (this.task.trim() === "") {
            let alertBox = this.alertCtrl.create({
                title: 'Empty Task',
                subTitle: 'Please add a title to create a task?',
                buttons: ['OK']
            });
            alertBox.present();
        }
        else {
            var task = { name: this.task };
            this.tasks.push(task);
            this.task = "";
            this.backButtonClick();
            this.storageService.setTaskList(this.tasks);

        }
    }
}