module.exports = (app) => {

    const getFileByIdRequest = (req, res) => {
        let { idRequest } = req.params
        app.services.report.getFileByIdRequest(idRequest)
            .then( result => {
                const file = `./temp/${result}`
                res.status(200).download(file)})
        app.fs.unlink(`${file}`,(err) => {
            if(err) return err
        } )
        res.end()
            }

    return { getFileByIdRequest }
}