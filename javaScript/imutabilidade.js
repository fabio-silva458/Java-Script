const user = {
    name: "Fabio "
lastName:"Fabio Silva"

};

funtion getUserWithFullName(user) {
    return {
        ...user,
        fullName: "&{user.name} ${user.lastName}"
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);
