export class User{

  private _id:number;
  private _nom: string;
  private _prenom:string;
  private _nombre_enfants:number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nombre_enfants(): number {
    return this._nombre_enfants;
  }

  set nombre_enfants(value: number) {
    this._nombre_enfants = value;
  }
}
