import { Component } from '@angular/core';
import { yerba } from './yerba.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   YerbaList:Array<yerba>=[{nazwa:"Meta Mate 23", cena:42,waga:500,kofeina:1,zdjecie:"../assets//img//1.jpg",typ:"Chimarro"},
   {nazwa:"Meta Mate CRAFT Gehm Classica", cena:69,waga:500,kofeina:0.4,zdjecie:"../assets//img//2.jpg",typ:"Chimarro"},
   {nazwa:"Kurupi Menta Boldo", cena:22,waga:500,kofeina:0.6,zdjecie:"../assets//img//3.jpg",typ:"Paragwajska"},
   {nazwa:"FD Fede Rico", cena:26,waga:500,kofeina:0.7,zdjecie:"../assets//img//4.jpg",typ:"Paragwajska"}];
   selectedyerba:yerba=this.YerbaList[0];

}
