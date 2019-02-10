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


const queryTable = async (table) => {
  const query = `SELECT RTC_T,id FROM ${table} WHERE CHAR_LENGTH(RTC_T) > 19`;
  console.log('starting the cleaning process');

  await CONNECTION.query(query, (queryError, result, fields) => {
    if (queryError) {
      throw queryError;
    }
    result.map((rtcField) => {
      console.log(`${rtcField.id} === ${rtcField.RTC_T.slice(-19)}`);
      return undefined;
    });
  });

  console.log('############ done cleaning');
};

queryTable('GroundNode');
