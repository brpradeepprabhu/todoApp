import { Component, OnInit } from '@angular/core';
import {CreateCategory} from "../createCategory/createCategory"
import {  NavController } from 'ionic-angular'
@Component({ 
    selector: 'category',
    templateUrl: 'category.html'
})

export class CategoryComponent implements OnInit {
    constructor(private nav:NavController) { }

    ngOnInit() { }
    createCategory(){
        this.nav.setRoot(CreateCategory);
    }
}