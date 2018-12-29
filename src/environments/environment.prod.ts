const SERVER_URL = 'http://127.0.0.1:8000';

export const environment = {
    production: false,
    serverUrl: SERVER_URL,
    apiUrl: SERVER_URL,
    firebaseConfig : {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
    }
};
