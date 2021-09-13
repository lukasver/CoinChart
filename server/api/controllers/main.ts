import { Response } from 'express';
import Sequelize from 'sequelize';
import db from '../../db/models';

export class MainController {
  async all(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'ALL GOOD FRIEND' });
  }
}

export default new MainController();
