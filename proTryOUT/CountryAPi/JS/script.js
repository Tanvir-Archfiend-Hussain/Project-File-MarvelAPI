fetch("https://papi-pornstarsapi.p.rapidapi.com/pornstars/?ordering=-nationality", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "<your rapid api key>",
    "x-rapidapi-host": "papi-pornstarsapi.p.rapidapi.com"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});