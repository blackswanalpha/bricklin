import { Component, OnInit } from '@angular/core';
import { routeTransitionAnimations } from '../animations';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { LoadingHandler } from '../loading';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    animations: [routeTransitionAnimations]
})
export class NavComponent {
  loadingHandler = new LoadingHandler();

  constructor(private http: HttpClient) { }
active = 'top';
  // ngOnInit(): void {
  // }
 prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
	}
}
