import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from './../../sheard/services/Flowbite/flowbite.service';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { _myTranslateService } from '../../sheard/services/translate/translate.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {

  private readonly _myTranslateService = inject(_myTranslateService)
  constructor(private _FlowbiteService: FlowbiteService) {
    this._FlowbiteService.loadFlowbite(() => { })
  }


  changeLang(lang: string) { this._myTranslateService.changLangTranslate(lang) }

}
