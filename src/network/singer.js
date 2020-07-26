import {request} from "./request";

export function _getArtists(id) {
    return request({
        url: "/artists",
        params: {
            id: id
        }
    })

}