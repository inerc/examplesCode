/**
 * Created by inerc on 02.05.17.
 */
import {GET_REQUEST, GET_FAILURE, GET_SUCCESS} from '../../actions/statistic';


export default (state = {}, action) => {
    switch(action.type){

        case GET_REQUEST:
            return state;

        case GET_FAILURE:
            return state ;

        case GET_SUCCESS:
            return action.payload.data ;


        default:
            return state;
    }

}