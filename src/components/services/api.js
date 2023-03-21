const getDataApi = () => {
    return fetch ('https://randomuser.me/api/?results=50')
    .then ((response) => response.json())
    .then ((data) => {
        const okData = data.results.map((eachContact) =>{
            return {
                name: eachContact.name.first,
                lastName: eachContact.name.last,
                gender: eachContact.gender,
                photo: eachContact.picture.large,
                city: eachContact.location.city,
                id: eachContact.id,
                age: eachContact.dob.age
            };
        });
        return okData;
    })
}

export default getDataApi;