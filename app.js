const express = require('express')
const app = express()
const api = require('./index.js');
const router = express.Router();

app.get(api);


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

router.get('/addMember', async (req, res) => {

    res.render('addMember', { name: 'John' });


});

router.get('/getAllMembers', async (req, res) => {

    var view = {
        pageTitle: "Jonathan"
    };

    res.send(view);

});

app.use("/client", router);

app.listen(8082, () => {
    console.log(`App running listening at http://localhost:8082`)
})
