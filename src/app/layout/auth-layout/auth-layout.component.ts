import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavAuthComponent } from "../../AllComponents/nav-auth/nav-auth.component";
import { FooterComponent } from "../../AllComponents/footer/footer.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NavAuthComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
