const db = require('../database/models');
const { Op } = require("sequelize")

module.exports = {
    list: (req, res) => {
        db.Movies.findAll()
        .then(movies => {
            return res.render('moviesList', {movies})
        })
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']],
        })
        .then(movies => {
            return res.render('newestMovies', {movies})
        })
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            where: {
                rating: {[Op.gte]: 8},
            },
            order: [["rating", "DESC"]],
            limit: 5,
        })
        .then(movies => {
            return res.render('recommendedMovies', {movies})
        })
    },
    detail: (req, res) => {

        const movieId = req.params.id
        
        db.Movies.findByPk(movieId)
        .then(movie => {
            return res.render('moviesDetail', {movie})
        })
    },
}