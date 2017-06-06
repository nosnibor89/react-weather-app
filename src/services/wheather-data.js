function getWeather(city) {
  return new Promise((resolve, reject) => {
    resolve(79);
    reject("City not found");
  });
}

getWeather("Santiago")
  .then(res => console.log( 'Temp is :',res))
  .catch(err => console.log(err));

console.log('Done');
