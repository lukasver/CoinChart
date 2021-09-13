import db from '../db/models';

export default async (): Promise<void> => {
  const force = process.env.FORCE_SYNC_DB === 'true';
  if (force || process.env.SYNC_DB === 'true') {
    console.log(`sync'ing database... (force=${force})`);
    await db.sequelize.sync({ force });
  }
};
