export interface IHomePage{

  [Symbol.iterator](): IterableIterator<IHomePage>;
  id : number,
  nom_application: string,
  rating : number,
  vote : number,
  responsable: string,
  plateforme1: string,
  plateforme2: string,
  vote_hier : number,
  diff : number
}
