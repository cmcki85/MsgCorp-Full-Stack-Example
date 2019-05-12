import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body)
    const registration = req.context.models.User.create(
    {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickName: req.body.nickname,
        gender: req.body.gender,
    })
    

    return res.send('Registration Successful!')
})

export default router