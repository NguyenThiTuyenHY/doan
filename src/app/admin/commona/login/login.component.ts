import { Component, OnInit, Injector} from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../lib/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
   }
  error = '';
  returnUrl: string;
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  dangnhap(tk, mk){
    const md5 = new Md5();
    var a = md5.appendStr(mk).end();
    alert(a);
    this.authenticationService
      .login(tk, a.toString())
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error; 
        }
      );
  }
}
