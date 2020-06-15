import * as Express from 'express'; 
import * as Helmet from 'helmet'; 
import * as Cors from 'cors'; 

import { router } from './routers/auth'

const server = Express(); 

server.use(Helmet()); 
server.use(Cors()); 
server.use(Express.json()); 

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });
server.use('/api/auth', router);

export default server; 