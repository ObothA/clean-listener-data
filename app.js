import 'babel-polyfill'; // required to make promises work
import mysql from 'mysql';

// eslint-disable-next-line import/no-unresolved
import queryTable from '../utils/queryTable';

const CONNECTION = mysql.createConnection({
  host: 'localhost',
  user: 'jmuhumuza',
  password: 'joshua',
  database: 'wdrDb',
  multipleStatements: true,
});

CONNECTION.connect((connectionError) => {
  if (connectionError) {
    throw connectionError;
  }
  console.log('CONNECTION ESTABLISHED ************************* ========================== *********************** ');
});

queryTable('GroundNode', CONNECTION);
queryTable('SinkNode', CONNECTION);
queryTable('TenMeterNode', CONNECTION);
queryTable('TwoMeterNode', CONNECTION);
