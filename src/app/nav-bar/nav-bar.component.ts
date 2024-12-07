import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    // RouterOutlet,
    RouterLink,
    MatIconModule,
    MatToolbar,
    MatButtonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  private destorySubject = new Subject();
  isLoggedIn: boolean = false;
  constructor(private authService : AuthService, private router: Router){
    AuthService.authStatus.pipe(takeUntil(this.destorySubject))
    .subscribe
  }
onLogout() {
throw new Error('Method not implemented.');
}
loggedIn : boolean = false;
}
