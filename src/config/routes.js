
module.exports = (app) => {

    app.route('/supplier/:name')
        .get(app.routes.supplier.getByName)
    
    app.route('/request/:request/:supplier/:dtInitial/:dtFinal')
        .get(app.routes.request.getAll)
    
    app.route('/products/:idRequest')
        .get(app.routes.products.getByIdRequest)
    
    app.route('/report/download/sherwin/:idRequest')
        .get(app.routes.report.getFileByIdRequest)

    return app
}
