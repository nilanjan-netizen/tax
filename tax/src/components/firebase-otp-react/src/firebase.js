
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // set up API keys from fire base ...mine is not working ..tried many times
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
