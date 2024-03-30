## Nodejs backend for TourGuideMegaphone

Hosted at https://tourguidemegaphone-e5d7117dd068.herokuapp.com/

### Endpoints
- `POST /signin`

*Request Body*

```
{
    "email": "taimoor@gmail.com", 
    "password": "examplepassword"
}
```

- `POST /signup`

*Request Body*
```
{
    "email": "taimoor@gmail.com", 
    "password": "examplepassword",
    "fname": "Taimoor", 
    "lname": "Aslam"
}
```



### TourSessions Endpoints


- `POST /tours`
```
{ 
    "country": "PK", 
    "city": "LHE", 
    "tourTitle": "Salt Lake", 
    "tourDescription": "This is a sample tour description. We will add more text later on", 
    "tourStartDateTime": "9:50AM", 
    "tourDuration": 1, 
    "price": 25
}
```

- `GET /tours/:id`
```
curl -X GET  http://localhost:3000/tours/66086a642b0c0116e09b391f
```


- `GET /tours`
```
curl -X GET  http://localhost:3000/tours
```
