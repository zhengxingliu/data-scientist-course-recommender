const indeed = require('indeed-scraper');
const csv=require('csvtojson')

exports.searchIndeed = (req, res, next) => {
  // console.log(req.query)


  const queryOptions = {
    host: `${req.query.country}.indeed.com`,
    query: req.query.jobtitle,
    city: req.query.city,
    // radius: '25',
    // level: 'entry_level',
    // jobType: 'fulltime',
    // maxAge: '7',
    // sort: 'date',
    limit: 5
  };
  console.log(queryOptions)
  indeed.query(queryOptions).then(result => {
    
      console.log(result); // An array of Job objects
      res.json(JSON.stringify(result))
  });

}


exports.fetchIndeed = async (req, res, next) => {
  const csvFilePath='./data/indeed_data_scientist.csv'
  const jsonArray=await csv().fromFile(csvFilePath);
  // console.log(jsonArray)
  res.json(JSON.stringify(jsonArray))
}


