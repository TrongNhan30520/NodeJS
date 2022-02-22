const { renderSync } = require('node-sass');
const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');
const urlSlug = require('url-slug');
const { customAlphabet } = require('nanoid');

class CourseController {
    //[GET]/courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[GET]/courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST]/courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://cdn.fullstack.edu.vn/f8-production/courses/6.png`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
