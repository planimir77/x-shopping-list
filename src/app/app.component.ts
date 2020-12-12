import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './core/services';
import { COOKIE_MESSAGE, I_AGREE } from 'src/app/shared/constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser;
  isLogged$ = this.authService.isLogged$;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  cookieMessage: string;
  cookieDismiss: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {
    this.cookieMessage = COOKIE_MESSAGE;
    this.cookieDismiss = I_AGREE
  }

  ngOnInit(): void {

    const cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#673ab7",
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
      }
    });

    this.authService.currentUser$.subscribe(currentUser =>
      this.currentUser = currentUser);
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

}
