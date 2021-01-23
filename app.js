//region declaring variable
const express       = require('express');
const ejs           = require('ejs');
const bodyParser    = require('body-parser');
const adminRouter   = require('./routes/admin');
const mainRouter    = require('./routes/shop');
const PORT          = process.env.PORT || 3000;
const app           = express();
//endregion

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//region routes
app.use('/admin', adminRouter); // admin - is a filter
app.use(mainRouter);
//endregion

//region show page 404
app.use((req, res) => {
	res.status(404).render('404.ejs', {
		pageTitle: 'Page Not Found',
		path: ''
	});
});
//endregion

//region port listener
app.listen(PORT, () => {
    console.log(`${PORT} is running`);
});
//endregion