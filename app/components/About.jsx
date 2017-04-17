var React = require('react');

var About = (props) => {
  return(
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>
        This is a weather application build on React. I have built this
        for The complite React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a>
          - This was the JavaScript Framework used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a>
          I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About ;
