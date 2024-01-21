# Power Pulse backend

Welcome to the Power Pulse backend! This project was made for the [Power Pulse](https://arch819.github.io/project-PowerTeam-front/welcome) app, using node.js and express framework.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributors](#contributors)

## Featured

- **Authorization Functionality:** With the Power Pulse backend, you can keep your information safe. Here is implemented the functionality of registration, login and user logout. Also you can update profile information.

- **Personal Diaries for Everyone:** Every authorized user can have their own special diary. In this diary, you can track your progress, find out your daily calorie intake. And also add consumed products and performed exercises for today.

- **Private Routes for Special Users:** If you sign in, you get special access to private routes, where you can find all the exercises and products.

## Getting Started

The base url for all requests: https://powerpulse-backend-heie.onrender.com

## Usage

A few examples of using:

```
Request:

GET https://powerpulse-backend-heie.onrender.com/users/current

Response:

{
    "user": {
        "email": "joi@co.com",
        "name": "Joi",
        "avatarURL": "https://res.cloudinary.com/dwkvsznn0/image/upload/v1705872001/avatars/65ad89955752febd5bd565f9.jpg",
        "bodyData": true
    },
    "userParams": {
        "height": 157,
        "currentWeight": 56,
        "desiredWeight": 60,
        "birthday": "2005-10-10",
        "blood": 3,
        "sex": "male",
        "levelActivity": 324,
        "bmr": 0
    }
}

```

Request:

GET https://powerpulse-backend-heie.onrender.com/exercises

Response:

[
{
"bodyPart": "chest",
"equipment": "leverage machine",
"gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0009.gif",
"name": "assisted chest dip (kneeling)",
"target": "pectorals",
"burnedCalories": 329,
"time": 3,
"idExercise": "64f2458d6f67bc34bae4f7f7"
},
{
"bodyPart": "upper legs",
"equipment": "barbell",
"gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0090.gif",
"name": "barbell seated good morning",
"target": "glutes",
"burnedCalories": 35,
"time": 3,
"idExercise": "64f2458d6f67bc34bae4f846"
},
...
]

```

## Documentation

Yo can see our documentation [here](https://powerpulse-backend-heie.onrender.com/api-docs/)

## Contributors

Thanks goes to these wonderful people:

- [Svitlana Paryiska](https://github.com/SvitlanaParyiska)
- [Alina Pishak](https://github.com/Alina-Pishak)
- [Volodymyr Vitiuk](https://github.com/VitiukVV)
- [Andrii Pysarenko](https://github.com/AndreyPysarenko)
- [Maksym Sytnyk](https://github.com/Maksim713)
- [Oleksandra Stytsiuk](https://github.com/Alexa01821)
- [Viacheslav Kosovskyi](https://github.com/Arch819)
- [Serhii Markov](https://github.com/Serhiy8)
- [Ihor Mushketyk](https://github.com/IgorMushk)
- [Ganna Andriyenko](https://github.com/Annacheer)
- [Liudmyla Ridko](https://github.com/liussi)
```
