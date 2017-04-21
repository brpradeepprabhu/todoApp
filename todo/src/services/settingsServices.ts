import { Injectable } from '@angular/core';
import { StorageService } from "./storageService"
@Injectable()
export class SettingsService {
    confirmationDelete = true; settings: any;
    quickToDo: boolean = true;
    constructor(private storageService: StorageService) {
        this.settings = this.storageService.getSettings();
        this.settings = this.settings == null ? {} : this.settings;
        console.log("seetings", this.settings)
        this.setIntitalValues();
    }
    setIntitalValues() {
        this.confirmationDelete = this.settings.confirmationDelete === undefined ? true : this.settings.confirmationDelete;
        this.quickToDo = this.settings.quickToDo === undefined ? true : this.settings.quickToDo;
    }
    getConfirmationDelete() {
        return this.confirmationDelete;
    }
    getQuickToDO() {
        return this.quickToDo
    }
    setQuickToDo(value: boolean) {
        this.quickToDo = value;
        this.settings.quickToDo = value;
        this.storageService.setSettings(this.settings);
    }
    setConfirmationDelete(value: boolean) {
        this.confirmationDelete = value;
        this.settings.confirmationDelete = value;
        this.storageService.setSettings(this.settings);
    }
}