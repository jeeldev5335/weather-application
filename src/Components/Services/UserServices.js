import api from '../../api';
import { appid } from '../../Utils';

class UserServices {

    usingCityName(city) {
        api.get(`/data/2.5/weather/q=${city}&appid=${appid}`)
            .then((response) => {
                return response;
            }).catch((error) => {
                throw error;
            })
    }

    usingCoordinates(lat, lon) {
        api.get(`/data/2.5/weather/lat=${lat}&lon=${lon}&appid=${appid}`)
            .then((response) => {
                return response;
            }).catch((error) => {
                throw error
            })
    }

    getIcons(id) {
        api.get(`/img/wn/${id}@2x.png`)
            .then((response) => {
                return response
            }).catch((error) => {
                return error;
            })
    }

}

export default UserServices;