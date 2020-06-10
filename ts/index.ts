import * as Dotenv from 'dotenv'; 
import server from './server';

Dotenv.config(); 
const PORT = process.env.PORT || 5000; 

console.log(PORT);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})