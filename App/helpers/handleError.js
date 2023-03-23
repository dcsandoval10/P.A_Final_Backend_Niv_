const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({error: 'Algo ocurrio', err: err})
}

module.exports = { httpError}