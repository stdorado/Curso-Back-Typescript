import { Request, Response, Router, response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
    response.send('¡Hola, mundo!');
  });

  export default router;