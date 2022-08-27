export const apiBaseUrl = 'https://api.openweathermap.org';

export const appid = '9432aff2b8ba1b7f031f85cfdb5137e8';

export const allowOnlyAlphabets = (event) => {
    if (event.keyCode > 31 && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122)) {
        event.preventDefault();
    }
    return true;
}