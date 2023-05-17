import {withIronSessionApiRoute} from 'iron-session/next'
import { sessionOptions } from '@/customHook/useSessionOptions';

async function handler(req, res){
    req.session[req.query.key] = req.query.value
    await req.session.save();
    res.send({ ok: true });
}


export default withIronSessionApiRoute( handler, sessionOptions )