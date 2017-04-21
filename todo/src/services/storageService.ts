import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }
    getTaskList() {
        return JSON.parse(localStorage.getItem("taskList"));
    }
    setTaskList(tasks: any) {
        localStorage.setItem("taskList",JSON.stringify(tasks));
    }
    getSettings(){
        return JSON.parse(localStorage.getItem("settings"));
    }
    setSettings(setting:any){
        console.log(setting,"adding to setting")
        localStorage.setItem("settings",JSON.stringify(setting));
    }
}