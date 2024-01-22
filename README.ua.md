# Power Pulse backend

Ласкаво просимо до серверної частини [Power Pulse](https://arch819.github.io/project-PowerTeam-front/welcome). Цей сервер створений на основі Node.js і фреймворку Express, включає в себе нові технології та сучасні методи для вищої продуктивності. Підключений до бази даних MongoDB, що робить динамічну та безпечну основу, забезпечуючи надійність програми.

## Зміст

- [Функції](#функції)
- [Початок роботи](#початок-роботи)
- [Використання](#використання)
- [Документація](#документація)
- [Учасники](#учасники)

## Функції

- **Authorization Functionality:** With the Power Pulse backend, you can keep your information safe. Here is implemented the functionality of registration, login and user logout. Also you can update profile information.

- **Personal Diaries for Everyone:** Every authorized user can have their own special diary. In this diary, you can track your progress, find out your daily calorie intake. And also add consumed products and performed exercises for today.

- **Private Routes for Special Users:** If you sign in, you get special access to private routes, where you can find all the exercises and products.

- **Функцiонал авторизації:** за допомогою серверної частини Power Pulse ви можете тримати свою інформацію в безпеці. Тут реалізований функціонал реєстрації, входу та виходу користувача. Також ви можете оновити інформацію профілю.

- **Особистий щоденник для кожного:** кожен авторизований користувач може мати власний щоденник. У цьому щоденнику ви можете відстежувати свій прогрес та дізнаттся свою денну норму калорій. А також додати спожиті продукти та виконані вправи за сьогодні.

- **Приватні маршрути для авторизованих користувачів:** якщо ви зареєструєтесь, ви отримаєте доступ до приватних маршрутів, де ви можете знайти всі вправи та продукти.

## Початок роботи

Базовий url для всіх запитів: https://powerpulse-backend-heie.onrender.com

## Використання

**Декілька прикладів використання:**

Запит: GET https://powerpulse-backend-heie.onrender.com/users/current

Відповідь:

```
{
    "user": {
        "email": "example@co.com",
        "name": "Example",
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

Запит: GET https://powerpulse-backend-heie.onrender.com/exercises

Відповідь:

```
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

## Документація

Ви можете ознайомитися з нашою документацією [тут](https://powerpulse-backend-heie.onrender.com/api-docs/).

## Учасники

Особлива подяка цим чудовим людям:

- [Світлана Парийська](https://github.com/SvitlanaParyiska)
- [Аліна Пішак](https://github.com/Alina-Pishak)
- [Володимир Вітюк](https://github.com/VitiukVV)
- [Андрій Писаренко](https://github.com/AndreyPysarenko)
- [Максим Ситник](https://github.com/Maksim713)
- [Олександра Стицюк](https://github.com/Alexa01821)
- [Вячеслав Косовський](https://github.com/Arch819)
- [Сергій Марков](https://github.com/Serhiy8)
- [Ігор Мушкетик](https://github.com/IgorMushk)
- [Ганна Андрієнко](https://github.com/Annacheer)
- [Людмила Рідько](https://github.com/liussi)
