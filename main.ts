import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr9IAIkfXohaOlfucTqasP4LF0DGGrTFA",
  authDomain: "stellagraphica.firebaseapp.com",
  projectId: "stellagraphica",
  storageBucket: "stellagraphica.appspot.com",
  messagingSenderId: "476648718551",
  appId: "1:476648718551:web:2c03efff67905832187092",
  measurementId: "G-1QVQ555T8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
