// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;

// routes.post('/users', (request, response) => {
//     const { name, email } = request.body

//     const user = {
//         name,
//         email,
//     };

//     return response.json(user);
//   });


