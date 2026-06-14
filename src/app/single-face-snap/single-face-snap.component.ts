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
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    Button,
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  /* ! Injecteur pour récupérer les données du parent
  //faceSnap: InputSignal<FaceSnap> = input<FaceSnap>();

  // Propriétés de la futur image.
  /*
   * Si on ne met pas "!", typescript nous préviens que nos variables ne sont pas init nul part.
   * Alors on lui fait une promesse qu'on va les inits mais plus tard
   */
  //title!: string;
  //description!: string;
  //createdAt!: Date;
  //snaps!: number;
  //imageUrl!: string; */

  faceSnap!: FaceSnap;

  // ! propriété lié à l'interface
  snapButtonText!: string;
  userAsSnap!: boolean;
  //myLargeNumber = 4667916.76;

  constructor(
    private facesService: FacesService,
    private route: ActivatedRoute,
  ) {}

  // ! Initialisation des données
  /*
   * OnInit c'est une méthode d'interface sur les components qui doit être exécutée une fois par instance
   * au moment de sa création.
   */
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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
    this.facesService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap !';
    this.userAsSnap = false;
  }

  snap(): void {
    this.facesService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap !';
    this.userAsSnap = true;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.facesService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap !';
    this.userAsSnap = false;
  }
}
