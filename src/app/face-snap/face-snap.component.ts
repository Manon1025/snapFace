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
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [Button, NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  // ! Injecteur pour récupérer les données du parent
  faceSnap: InputSignal<FaceSnap> = input<FaceSnap>();

  constructor(private router: Router) {}

  protected onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap().id}`);
  }


}
