import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // ! Création de tableau de FaceSnap pour dynamiser de 0 à n
  faceSnaps: FaceSnap[];

  // ! Ancienne version avant les tableaux
  // Création d'une faceSnap de l'utilisateur Ghost qui prend comme model : face-Snap
  //mySnap!: FaceSnap;
  //myOtherSnap!: FaceSnap;
  //myLastSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Ghost',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fillustration-ghost-violet-tones_989263-18988.jpg&f=1&nofb=1&ipt=4d658a8e647a070ca22272ba0b4e293787d4cd68503dd385230e3e94d4a9509f',
        'Mon meilleur ami depuis toujours',
        new Date(),
        160,
      ),

      new FaceSnap(
        'Maé',
        'https://i.pinimg.com/736x/ed/68/e3/ed68e346f24bcda17c5b8d590ef02ac4.jpg',
        'Mon petit lapin',
        new Date(),
        10,
      ),

      new FaceSnap(
        'Tintin',
        'https://i.pinimg.com/736x/ba/8b/e2/ba8be2085df1570b6b7716e21359d768.jpg',
        'Vive LoL',
        new Date(),
        50,
      ),
    ];

    this.faceSnaps[1].setLocation('Grenoble');
  }
}
