const express = require('express')
const router = express.Router()
const movies = require('../models/movie')

//get all movies
router.get('/', async(req, res) =>{
    const allMovies = await movies.find()
    res.status(200).json(allMovies)
})
//get one movie by id
router.get('/:id', async (req, res) =>{
    const onemovie = await movies.findbyId(req.param.id)
    res.status(200).json(onemovie)
})
//create new movie
router.post('/', async(req, res) =>{
    const data = new movies( {
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        category: req.body.category,
        review: req.body.review

    })
    try {
        newdata = await data.save()
        res.status(200).json(newdata)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//update a movie
router.patch('/:id', async(req, res) =>{
    try {
        const id = req.params.id
        const upDateMovie = req.body
        const options = {new: true}

        const result = await movies.findByIdAndUpdate(id, upDateMovie, options)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Delete a movie by id
router.delete('/:id', async (req, res) =>{
    const movieToDelete = await movies.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: "movie deleted", movieToDelete})
})

module.exports = router;