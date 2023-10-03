import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.get('/api/', (req, res) => {
  console.log("GET Users Route")
})

export default usersRoutes;