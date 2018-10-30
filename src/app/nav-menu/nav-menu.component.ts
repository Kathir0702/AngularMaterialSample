import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalVariablesService  } from '../Shared/global-variables.service';
@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [ GlobalVariablesService ]
})
export class NavMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    sideMenuTitle:string;
    AppName;
  constructor(private breakpointObserver: BreakpointObserver, private globalVariable : GlobalVariablesService) {
     this.sideMenuTitle = globalVariable.getSideMenuTitle;
    // this.AppName = this.globalVariable.getAppName;
  }
  
  }
