let nameShuttler = 'Determination';
let shuttleSpeed = 17500;
let dist_Mars_km = 225000000;
let dist_Moon_km = 384400;
let miles_km = 0.621;


let milestoMars = dist_Mars_km * miles_km;
let hourstoMars = milestoMars / shuttleSpeed;
let daysofMars = hourstoMars /24;
alert(`${nameShuttler} will take ${daysofMars} days to reach Mars`);


let milestoMoon = dist_Moon_km * miles_km;
let hourstoMoon = milestoMoon / shuttleSpeed;
let daysofMoon = hourstoMoon /24;
alert(`${nameShuttler} will take ${daysofMoon} days to reach Moon`);