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
  const query = `SELECT RTC_T FROM ${table} WHERE CHAR_LENGTH(RTC_T) > 19`;
  await CONNECTION.query(query, (queryError, result, fields) => {
    if (queryError) {
      throw queryError;
    }
    result.map((rtcField) => {
      // console.log(rtcField.RTC_T);
      console.log(rtcField.RTC_T.slice(-18));
      return undefined;
    });
  });
};

queryTable('GroundNode');
