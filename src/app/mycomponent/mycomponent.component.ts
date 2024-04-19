import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class MycomponentComponent {
  title = "My new Component";
  url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3D7xNAMU_zBdWhRK9wRhye_s6tVQ8f9pyDHexwRfJQ&s";
  url = this.url1;
  showDays = false

  jours = ["Lundi", "Mardi", "Mercredi", "..."]

  changeLogo(){
    //console.log("Button clicked!!!");
    this.url = (this.url===this.url1)?this.url2:this.url1;
  }

  changeShow(){
    this.showDays = !this.showDays
  }
}
