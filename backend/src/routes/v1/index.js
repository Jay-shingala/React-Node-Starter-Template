import { Router } from 'express';
import demoRouter from './demo.route';

const router = Router();

const defaultRoutes = [
  {
    path: '/demo',
    route: demoRouter,
  },
  // TODO: attach all other routes
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
