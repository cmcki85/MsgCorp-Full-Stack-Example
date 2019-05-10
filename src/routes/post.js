//import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const posts = await req.context.models.Posts.findAll()
    return res.send(posts)
})

router.get('/:messageID', async (req, res) => {
    const posts = await req.context.models.Posts.findByPk(
        req.params.postID
    )
    return res.send(posts)
})

router.post('/', async (req, res) => {
    const post = await req.context.models.Posts.create({
        postBody: req.body.text,
        userID: req.context.me.id,
    })
    return res.send(post)
})

router.delete('/:messageID', async (req, res) => {
    const result = await req.context.models.Posts.destroy({
        where: { id: req.params.postID }
    })

    return res.send(true)
})

export default router;
