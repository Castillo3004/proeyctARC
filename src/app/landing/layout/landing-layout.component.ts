import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, RouterModule ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css'
})
export default class LandingLayoutComponent {

}
