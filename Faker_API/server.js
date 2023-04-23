const express =  require('express');
const app = express(); // invoking express
const PORT = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker');

const createUser = ()=> {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
}

const createCompany = () => {
    return{
        _id:faker.datatype.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }

    }
}

app.get("/api/users/new", (req,res) =>{
    res.json(createUser())
})

app.get("/api/companies/new", (req,res)=>{
    res.json(createCompany())
})

app.get("/api/user/company", (req, res)=>{
    res.json({
        user: createUser(),
        company: createCompany()
    })
})



app.listen(PORT, () => console.log(`server up on PORT : ${PORT}`))