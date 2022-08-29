import api from '../../api';
import { appid } from '../../Utils';

class UserServices {

    usingCityName(city) {
        return (
            api.get(`/data/2.5/weather?q=${city}&appid=${appid}`)
                .then((response) => {
                    return response;
                }).catch((error) => {
                    throw error;
                })
        )
    }

    usingCoordinates(lat, lon) {
        return (
            api.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`)
                .then((response) => {
                    return response;
                }).catch((error) => {
                    throw error
                })
        )
    }

    getIcons(id) {
        return (
            api.get(`/img/wn/${id}@2x.png`)
                .then((response) => {
                    return response
                }).catch((error) => {
                    throw error;
                })
        )
    }

}

export default UserServices;