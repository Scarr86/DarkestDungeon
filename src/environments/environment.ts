// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDld_PcYi1b_m1bWSnQQzas8v1IqJV9Omo',
    authDomain: 'darkest-dungeon-56880.firebaseapp.com',
    databaseURL: 'https://darkest-dungeon-56880-default-rtdb.firebaseio.com',
    projectId: 'darkest-dungeon-56880',
    storageBucket: 'darkest-dungeon-56880.appspot.com',
    messagingSenderId: '885547719130',
    appId: '1:885547719130:web:3f9424bdfa0bd6090a88e3',
  },
  heroes: [
    {
      id: 11,
      name: 'Антиквар',
      wiki:
        'https://darkestdungeon.fandom.com/ru/wiki/%D0%90%D0%BD%D1%82%D0%B8%D0%BA%D0%B2%D0%B0%D1%80',
      skills: [
        { id: 11, name: 'Робкий выпад' },
        { id: 12, name: 'Едкие испарения' },
        { id: 13, name: 'Ложись!' },
        { id: 14, name: 'Слепящий порошок' },
        { id: 15, name: 'Укрепляющие благовония' },
        { id: 16, name: 'Бодрящие благовония' },
        { id: 17, name: 'Защити меня' },
      ],
      campSkills: [{ id: 11, name: '' }],
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
