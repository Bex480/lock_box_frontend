import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-landing-page',
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './landing-page.component.html',
    standalone: true,
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
