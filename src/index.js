import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import models, { sequelize } from './models';
import routes from './routes';

const app = express()

// Middleware
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('cmoqing@g.com'),
    }
    next()
})

//Routes
app.use('/register', routes.register)
app.use('/login', routes.login)
//app.use('/register', routes.user)
app.use('/posts', routes.post)

// Database Sync
const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    // Seeding/Init
    if (eraseDatabaseOnSync) {
        createUsersWithFeed()
    } 
    // Startup
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})

async function createUsersWithFeed() {
    await models.User.create(
    {
        email: 'cmoqing@g.com',
        password: 'pass1',
        firstName: 'Cameron',
        lastName: 'Mckiddie',
        nickName: 'Camos',
        gender: 'Male',
        posts: [
            {
                ID: 1,
                postBody: 'rawr xdd!',
            }
        ],
    },
        {
            include: [models.Posts],
        }
    );

    await models.User.create(
    {
        email: 'example@g.com',
        password: 'pass1',
        firstName: 'Jane',
        lastName: 'Mikinley',
        nickName: 'JJ',
        gender: 'Female',
        posts: [
            {
                ID: 2,
                postBody: 'offft',
            },
            {
                ID: 3,
                postBody: 'Ur mom gay!'
            }
        ],
    },
        {
            include: [models.Posts]
        }
    )
}


