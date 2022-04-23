export interface IHomePage{

  [Symbol.iterator](): IterableIterator<IHomePage>;
  app_id : number,
  app_nom : string,
  os : string,
  rating : number,
  vote_jour : number,
  diff : number
}
