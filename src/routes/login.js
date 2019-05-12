import { Router } from 'express'

const router = Router();

router.post('/', (req, res) => {
    const login = req.context.models.User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    return res.send('Login Successful!')
})

export default router