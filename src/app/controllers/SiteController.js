const { renderSync } = require('node-sass');
const Courses = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /news
    index(req, res, next) {
        Courses.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // res.render('home');
    }

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
