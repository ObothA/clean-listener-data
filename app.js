import 'babel-polyfill'; // required to make promises work
import mysql from 'mysql';

const CONNECTION = mysql.createConnection({
  host: 'localhost',
  user: 'jmuhumuza',
  password: 'joshua',
  database: 'wdrDb',
});

CONNECTION.connect((connectionError) => {
  if (connectionError) {
    throw connectionError;
  }
  console.log('CONNECTION ESTABLISHED ************************* ========================== *********************** ');
});

const query = 'SELECT RTC_T FROM GroundNode WHERE CHAR_LENGTH(RTC_T) > 19';
CONNECTION.query(query, (queryError, result, fields) => {
  if (queryError) {
    throw queryError;
  }
  console.log(result);
});
