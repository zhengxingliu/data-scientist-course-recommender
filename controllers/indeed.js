const indeed = require('indeed-scraper');


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
    limit: 2
  };
  console.log(queryOptions)
  indeed.query(queryOptions).then(result => {
    
      console.log(result); // An array of Job objects
      res.json(JSON.stringify(result))
  });


  
}



