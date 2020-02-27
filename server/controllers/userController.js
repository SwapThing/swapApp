const db = require('../models/SwapModel');
const userController = {};
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  '382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com'
);

userController.verifyUser = (req, res, next) => {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.headers.authorization,
      audience:
        '382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com'
    });
    const payload = ticket.getPayload();

    const { name, email, sub } = payload;
    const values = [name, email, sub];
    const query1 = `SELECT EXISTS(SELECT 1 FROM "user" WHERE googleId = '${payload.sub}')`;

    const query2 = `INSERT INTO "user" (user_name, email, googleId)
                    VALUES ($1, $2, $3)
                    RETURNING *`;

    const query3 = `SELECT * from "user" where googleId = '${payload.sub}'`;
    let exists;

    db.query(query1)
      .then(data => {
        exists = data.rows[0].exists;
        if (exists === false) {
          db.query(query2, values)
            .then(data => {
              res.locals.users = data.rows;
              next();
            })
            .catch(err => console.log(err));
        } else {
          db.query(query3).then(data => {
            res.locals.users = data.rows;
            next();
          });
        }
      })
      .catch(err => console.log(err));
  }
  verify().catch(console.error);
};

module.exports = userController;
