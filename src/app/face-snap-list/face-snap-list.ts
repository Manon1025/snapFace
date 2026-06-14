import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FacesService } from '../services/faces-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  // ! Création de tableau de FaceSnap pour dynamiser de 0 à n
  faceSnaps: FaceSnap[];

  // ! Ancienne version avant les tableaux
  // Création d'une faceSnap de l'utilisateur Ghost qui prend comme model : face-Snap
  //mySnap!: FaceSnap;
  //myOtherSnap!: FaceSnap;
  //myLastSnap!: FaceSnap;

  constructor(private faceSnapsServices: FacesService) {}

  ngOnInit() {
    // * Au lieu d'avoir les données ici on va le mettre dans un Service qui centralise les données et la logique qui est injecté ici
    this.faceSnaps = this.faceSnapsServices.getFaceSnaps();
  }
}
