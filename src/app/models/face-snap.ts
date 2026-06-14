import { SnapType } from './snap-type.type';

export class FaceSnap {
  location?: string; // * Le "?" permet de dire qu'il est optionnel donc peut être null ou undefided

  constructor(
    public id: string,
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
  ) {
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
