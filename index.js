const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    const visitorName = "Mark!";
    const clientIp = "127.0.0.1";
    const temperature = 11;
    const location = "New York";

    res.json({
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${visitorName}, the temperature is ${temperature} degrees Celsius in ${location}`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
