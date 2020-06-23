import * as Express from 'express'; 
import * as Helmet from 'helmet'; 
import * as Cors from 'cors'; 

import { router as authRouter } from './routers/auth'
import { router as detailsRouter } from './routers/details';

const server = Express(); 

server.use(Helmet()); 
server.use(Cors()); 
server.use(Express.json()); 

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });
server.use('/api/auth', authRouter);
server.use('/api/details', detailsRouter);

export default server; 