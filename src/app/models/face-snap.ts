import { SnapType } from './snap-type.type';

export class FaceSnap {
  location?: string; // * Le "?" permet de dire qu'il est optionnel donc peut être null ou undefided
  id: string;

  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
  ) {
    this.id = crypto.randomUUID().substring(0, 8); // String random de beaucoup de caractère qu'on limite de 0 à 8
    console.log(this);
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
