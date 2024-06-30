import PropTypes from 'prop-types';

const pad = val => ( '' + val ).padStart( 2, '0' );

const SunriseSunset = (
    {
        sunrise,
        sunset
    }
) => {
    // convert timestamp from seconds to millisecond since Epoch (Jan 1 1970 00:00:00:000)
    const sunriseDate = new Date( sunrise * 1000 );
    const sunsetDate = new Date( sunset * 1000 );

    const sunriseTime = `${pad( sunriseDate.getHours() )}:${pad(sunriseDate.getMinutes())}`;
    const sunsetTime = `${pad(sunsetDate.getHours())}:${pad(sunsetDate.getMinutes())}`;

    return (
        <>
            <h3 className="h4">Sunrise / Sunset</h3>
            <div>Sunrise: {sunriseTime}</div>
            <div>Sunset: {sunsetTime}</div>
        </>
    );
};

SunriseSunset.propTypes = {
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired
};

export default SunriseSunset;