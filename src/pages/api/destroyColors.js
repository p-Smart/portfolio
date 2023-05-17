import { sessionOptions } from '@/customHook/useSessionOptions'
import {withIronSessionApiRoute} from 'iron-session/next'

async function handler(req, res){
    req.session.destroy()
    res.send({okay: true})
}


export default withIronSessionApiRoute( handler, sessionOptions )