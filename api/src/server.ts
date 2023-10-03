import express from 'express';
import usersRoutes from "./routes/users.routes";
import { createConnection } from "typeorm";

const app = express();

app.use('/users', usersRoutes);

await createConnection()

app.listen(3000, function(){
  console.log('server started at port 3000');
})

