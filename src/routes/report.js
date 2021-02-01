module.exports = (app) => {
    const deleteFile = async (req, res) => {
        
    const deletedFilePaths = await app.deleteFile(['./temp/*.txt']);
    const deletedDirectoryPaths = await deleteFile(['./temp', 'public']);
    }
    const getFileByIdRequest = async (req, res, next) => {
        let { idRequest } = req.params
        app.services.report.getFileByIdRequest(idRequest)
            .then( async (result) => {
                req.body.file = result
               await res.download(result)
                next()
            })
        app.use(deleteFile)
        
        }
    return { getFileByIdRequest }
}