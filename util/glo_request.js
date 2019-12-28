import request from "./axios_creater";
import api_list from "./api_list";
var allRequest = (request_name, methods = "get", params = {}) => {
    var get_url_from_list = !request_name.match(/[\?\/]/);
    var api_arr = ["album"];
    var vnum = "v1";
    for (var v of api_arr) {
        if (request_name.match(v)) {
            if (request_name.match(/album\/\d+/)) {
                vnum = "v1";
            } else {
                vnum = "v1";
            }
            break;
        }
    }
    var url = get_url_from_list ? api_list[request_name] : request_name;
    var params_obj = {
        url: `/backend/api/${vnum}/` + url,
        method: methods
    };
    if (methods == "get") {
        params_obj.params = params;
    } else {
        params_obj.data = params;
    }
    return request(params_obj);
};
export default allRequest;
