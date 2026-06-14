import { Component, input, InputSignal, OnInit, output } from '@angular/core';
import { Button } from 'primeng/button';
import { FaceSnap } from '../models/face-snap';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { FacesService } from '../services/faces-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [
    Button,
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  // ! Injecteur pour récupérer les données du parent
  faceSnap: InputSignal<FaceSnap> = input<FaceSnap>();

  // Propriétés de la futur image.
  /*
   * Si on ne met pas "!", typescript nous préviens que nos variables ne sont pas init nul part.
   * Alors on lui fait une promesse qu'on va les inits mais plus tard
   */
  //title!: string;
  //description!: string;
  //createdAt!: Date;
  //snaps!: number;
  //imageUrl!: string;

  // ! propriété lié à l'interface
  snapButtonText!: string;
  userAsSnap!: boolean;
  //myLargeNumber = 4667916.76;

  constructor(private faceSnapService: FacesService) {}

  // ! Initialisation des données
  /*
   * OnInit c'est une méthode d'interface sur les components qui doit être exécutée une fois par instance
   * au moment de sa création.
   */
  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap !';
    this.userAsSnap = false;
  }

  // ! Event Binding de type Click
  /*
   * Création d'un méthode d'Event Binding pour ajouter un like et de l'enlever si c'est le même utilisateur.
   * Le void veut dire que nous ne renvoyons rien
   */
  onSnap(): void {
    if (this.userAsSnap) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap().id, 'unsnap');
    this.snapButtonText = 'Oh Snap !';
    this.userAsSnap = false;
  }

  snap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap().id, 'snap');
    this.snapButtonText = 'Oops, unSnap !';
    this.userAsSnap = true;
  }
}
