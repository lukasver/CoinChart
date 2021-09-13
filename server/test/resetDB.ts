import 'mocha';

import db from '../db/models';

before('Syncing and resetting database', async function () {
  console.log("force sync'ing database");
  this.timeout(10000);
  await db.sequelize.sync({ force: true });
});
