

const queryTable = async (table, CONNECTION) => {
  const query = `SELECT RTC_T,id FROM ${table} WHERE CHAR_LENGTH(RTC_T) > 19`;
  console.log(`starting to clean ${table}`);

  await CONNECTION.query(query, (queryError, result, fields) => {
    if (queryError) {
      throw queryError;
    }
    result.map(async (rtcField) => {
      console.log(`cleaning ${table} data ....`);
      const { id } = rtcField;
      const RTC_T = rtcField.RTC_T.slice(-19);
  
      const updateQuery = `UPDATE ${table} SET RTC_T = '${RTC_T}' WHERE id = ${id}`;
  
      await CONNECTION.query(updateQuery, (updateError, result, fields) => { 
        if (updateError) {
          throw updateError;
        }
      });

      return undefined;
    });

    console.log(`############ done cleaning ${table}`);
    console.log();
    console.log();
  });
};

export default queryTable;
