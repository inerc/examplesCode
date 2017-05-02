/**
 * Created by inerc on 08.11.16.
 */


import request from 'request';
import config from '../../../config';

exports.get = function (req, res, next) {

    let {user_id, reference_name} = req.body;
    let urlBackend = config.get("backend:url");
    request.get(urlBackend + reference_name, {

        headers: {
            'user_id' : user_id
        }

    }, (err, apiRes) => {
        if (err !== null) {
            res.status(500);
            res.send(JSON.stringify({}));
            next();
            return;
        }
        try {
            let response = JSON.parse(apiRes.body);
            res.status(response.status);
            if (response.status !== 200) {
                res.end();
                return;
            }
            res.send(JSON.stringify(response));

        } catch (e){
            res.sendStatus(503)
        }
        res.end();


    });

};