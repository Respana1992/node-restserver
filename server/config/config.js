//====================
//Puerto
//====================

process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del token
// ============================
// 60 segundo * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED de autenticacion
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-secret-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://bladesingle:<Admin123*@$>@cluster0.nal3l.mongodb.net/cafe'; //process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '880032947309-213hhfm5k12t7cbtt7h1ukil2rjhjdqr.apps.googleusercontent.com';