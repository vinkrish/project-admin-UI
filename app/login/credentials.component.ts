import { ElementRef }    from '@angular/core';
import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { Credentials }   from './credentials';
import { LoginService }  from './credentials.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/credentials.component.html',
    styleUrls: ['app/login/credentials.component.css']
})

export class LoginComponent {

    public user = new Credentials('', '');
    public errorMsg = '';

    constructor(private loginService: LoginService, private router: Router) { }

    login() {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.loginService.login(this.user).subscribe((result) => {
            if (result) {
                this.router.navigate(['/dashboard']);
            }
        });
    }
}