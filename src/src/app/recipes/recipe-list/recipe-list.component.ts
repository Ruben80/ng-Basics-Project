import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { TestBed } from '@angular/core/testing';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a Test',
			'https://cdn.pixabay.com/photo/2017/11/05/11/22/recipes-2920072_960_720.jpg'
		),
		new Recipe(
			'A Test Recipe',
			'This is simply a Test',
			'https://p0.piqsels.com/preview/179/204/843/barbecue-barbeque-bbq-chicken.jpg'
		)
	];

	constructor() {}

	ngOnInit() {}
}
