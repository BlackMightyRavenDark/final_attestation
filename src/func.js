export function validateEmail(email) {
    if (email === null || email === undefined || email === "") {
        return false;
    }

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

export function getDishIsBuyed(dishId, buyedDishes) {
    return buyedDishes && buyedDishes.find(element => element.id === dishId);
}
