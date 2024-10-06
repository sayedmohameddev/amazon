import { Component } from '@angular/core';
import { NavPagesComponent } from "../../AllComponents/nav-pages/nav-pages.component";
import { FooterComponent } from "../../AllComponents/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from "../../AllComponents/nav-auth/nav-auth.component";

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavPagesComponent],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

}
