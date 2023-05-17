import { sessionOptions } from '@/customHook/useSessionOptions';
import {withIronSessionApiRoute} from 'iron-session/next'

async function handler(req, res){
    res.send(req.session);
}


export default withIronSessionApiRoute( handler, sessionOptions )