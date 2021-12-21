const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e588495757cb7178ff47e074590bce1c&query=${lat},${long}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to find a network!");
    } else if (body.error) {
      callback("Unable to find loaction");
    } else {
      callback(
        undefined,
        `The humadity is ${body.current.humidity} and the temperiture is ${body.current.temperature} and it feels like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
