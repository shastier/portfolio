// log the query every time
const options = {
    query: (e) => {
      console.log(e.query);
    }
}

// Require and configure pg-promise
const pgp = require('pg-promise')(options);

// setDatabase equal to db
function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
      return pgp({
        database: 'projects_dev',
        port: 5432,
        host: 'localhost',
      })
    } else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABASE_URL);
    }
}
  
const db = setDatabase();

module.exports = db;