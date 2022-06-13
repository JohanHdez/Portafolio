import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-web';

  constructor( public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    lang !== 'es' && lang !== 'en' ? translate.setDefaultLang('es') : translate.use(lang);
  }
}
