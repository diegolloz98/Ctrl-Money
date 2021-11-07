const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
var cors = require('cors');
app.use(cors());

app.use('/home', express.static(__dirname + '/home.html'));
app.use('/folders', express.static(__dirname + '/folders.html'));
app.use('/profile', express.static(__dirname + '/profile.html'));

app.use(express.json());

//authMiddleware



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

