import { Component, input, InputSignal, OnInit, output } from '@angular/core';
import { Button } from 'primeng/button';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [Button],
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
    this.faceSnap().removeSnap();
    this.snapButtonText = 'Oh Snap !';
    this.userAsSnap = false;
  }

  snap(): void {
    this.faceSnap().addSnap();
    this.snapButtonText = 'Oops, unSnap !';
    this.userAsSnap = true;
  }
}
