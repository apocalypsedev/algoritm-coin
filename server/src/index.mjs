import express from 'express';
import routes from './routes/index.mjs';
import cookieParser  from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import './strategies/local-strategy.mjs';
import mongoose from 'mongoose';
import './configs/db.config.mjs';
import MongoStore from 'connect-mongo';

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect('mongodb+srv://buxorojahon:9EMZSkRw7owmhSyS@cluster0.vnbyhd7.mongodb.net/', 
{ useNewUrlParser: true, 
useUnifiedTopology: true }).then(() => console.log('Connected Successfully'))
.catch((err) => console.log(err));


const app = express();
// MongoDB ga boglanish

app.use(express.json());
app.use(cookieParser('my-cookie'));

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60
    },
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    })
}));

app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use(routes);     

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));