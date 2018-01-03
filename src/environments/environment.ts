// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBULpRrkAKRvelqcXa0fXHyGKmA8NjMpxY',
    authDomain: 'schooldule-demo.firebaseapp.com',
    databaseURL: 'https://schooldule-demo.firebaseio.com',
    projectId: 'schooldule-demo',
    storageBucket: 'schooldule-demo.appspot.com',
    messagingSenderId: '538920587802'
  }
};
