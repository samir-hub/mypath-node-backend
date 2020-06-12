import * as Dotenv from 'dotenv'; 

Dotenv.config(); 

import server from './server';


const PORT = process.env.PORT || 5000; 

console.log(PORT);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})