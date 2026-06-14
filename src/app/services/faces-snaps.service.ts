import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FacesService {
  private faceSnaps: FaceSnap[] = [
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
      50,
    ).withLocation('Grenoble'),

    new FaceSnap(
      'Tintin',
      'https://i.pinimg.com/736x/ba/8b/e2/ba8be2085df1570b6b7716e21359d768.jpg',
      'Vive LoL',
      new Date(),
      0,
    ),
  ];

  // * Méthode pour récupérer une copie du tableau qui sera indépendant grâce au Spread
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId,
    );

    if (!foundFaceSnap) {
      throw new Error(`No faceSnap found with id ${faceSnapId}`);
    }

    foundFaceSnap.snap(snapType);
  }
}
