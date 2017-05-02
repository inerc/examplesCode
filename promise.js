/**
 * Created by inerc on 02.05.17.
 */
exports.post = function (req, res, next) {

    //CS GO

    let {data} = req.body;
    // console.log(req.body);
    // // let urlBackend = config.get("backend:url");
    // console.log('https://fanobet-ru.com/ajax/getSpecials?eid='+payload);
    let Store = [];
    Promise.all( data.map(key => {
            return  new Promise((resolve, reject) => {
                request.get('https://fanobet-ru.com/ajax/getSpecials?eid='+key.id , {}, (err, apiRes) =>{
                if (err){
                    reject(err);
                    return;
                }
                resolve(JSON.parse(apiRes.body));
})
})
}) )
    .then(resolve => {
        res.status(200);
    res.send({data: resolve,});
    next();
},
    error => console.log("Error" + error.message));
};