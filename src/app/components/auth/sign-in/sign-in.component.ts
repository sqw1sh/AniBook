import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputGroupDirective } from '../../../directives/input-group.directive';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, InputGroupDirective],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {}
