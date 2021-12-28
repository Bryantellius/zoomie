import * as express from "express";
import { v4 as uuidV4 } from "uuid";

const router = express.Router();

router.get(
  "/join",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({ link: uuidV4() });
  }
);

export default router;
