import * as admin from 'firebase-admin';

// initialize firebase admin sdk - software development kit

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    } as admin.ServiceAccount),
  });
}


// write in database - this function will write data in database

export const writeData = async (table = '', date={}, id ='' ) => {
  if (id) {
    await admin.firestore().collection(table).doc(id).set(date);
  } else {
    await admin.firestore().collection(table).add(date);
  }
}



