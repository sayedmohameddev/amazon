import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class _myTranslateService {


  private _TranslateService = inject(TranslateService)

  constructor(@Inject(PLATFORM_ID) private platform: object) {
    if (isPlatformBrowser(this.platform)) {
      this._TranslateService.setDefaultLang("en")
      this.changeDir()
    }
  }


  changeDir(): void {

    let saveLang = localStorage.getItem("appLang")
    if (saveLang !== null) { this._TranslateService.use(saveLang!) }
    if (saveLang === 'en') {
      document.documentElement.dir = 'ltr'
    } else if (saveLang === 'ar') {
      document.documentElement.dir = 'rtl'
    }

  }


  changLangTranslate(lang: string) {
    if (typeof localStorage != "undefined") {
      localStorage.setItem("appLang", lang)
      this.changeDir()
    }
  }
}
