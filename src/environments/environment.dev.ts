export const environment = {

  production: false,
  title: 'Dev Environment Heading',

  //recuperation des donnés pour chaque OS pour une application données, fonctionne avec l'ID d'une application ajouté à l'URL
  //URL utilisée dans afficher
  apiGetOS : 'http://localhost/test/public/api/os/',
  //URL utilisée dans ajouter
  apiPostApplication : 'http://localhost/test/public/api/application/',

  //URL utilisée dans dashboard
  apiGetAppName : "http://localhost/test/public/api/application/name",

  //URL utilisée dans table
  apiGetAllApp : "http://localhost/test/public/api/application",
  apiGetAppByParam : 'http://localhost/test/public/api/application/param',

  //URL utilisée dans modifier
  apiApp : "http://localhost/test/public/api/application/",

  //URL utilisée dans tablegestion
  apiAppGet : 'http://localhost/test/public/api/application',

  //URL utilisée dans gerer
  apiAppGetName : 'http://localhost/test/public/api/application/name',

};
