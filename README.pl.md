# Power Pulse backend

Witamy w backendie Power Pulse stworzonym dla aplikacji [Power Pulse](https://arch819.github.io/project-PowerTeam-front/welcome). Serwer ten oparty na frameworku Node.js i Express, zawiera nowe technologie i nowoczesne metody zapewniające wysoką produktywność. Połączony z bazą danych MongoDB, co stanowi dynamiczną i bezpieczną podstawę zapewniającą niezawodność aplikacji.

## Spis treści

- [Wyróżniony] (#wyróżniony)
- [Pierwsze kroki](#pierwsze-kroki)
- [Stosowanie](#stosowanie)
- [Dokumentacja](#dokumentacja)
- [Współtwórcy](#współtwórcy)

## Wyróżniony

- **Funkcja autoryzacji:** Dzięki zapleczu Power Pulse możesz chronić swoje informacje. Zaimplementowano tu funkcjonalność rejestracji, logowania i wylogowania użytkownika. Możesz także zaktualizować informacje w profilu.

- **Osobiste pamiętniki dla każdego:** Każdy autoryzowany użytkownik może mieć swój własny, specjalny pamiętnik. W tym dzienniku możesz śledzić swoje postępy, dowiedzieć się, jakie jest dzienne spożycie kalorii. A także dodaj spożyte produkty i wykonane ćwiczenia na dzisiaj.

- **Trasy prywatne dla użytkowników specjalnych:** Jeśli się zalogujesz, otrzymasz specjalny dostęp do tras prywatnych, na których znajdziesz wszystkie ćwiczenia i produkty.

## Pierwsze kroki

Podstawowy adres URL dla wszystkich żądań: https://powerpulse-backend-heie.onrender.com

## Stosowanie

**Kilka przykładów zastosowania:**

Żądanie: GET https://powerpulse-backend-heie.onrender.com/users/current

Odpowiedź:

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

Żądanie: GET https://powerpulse-backend-heie.onrender.com/exercises

Odpowiedź:

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

## Dokumentacja

Możesz zobaczyć naszą dokumentację [tutaj] (https://powerpulse-backend-heie.onrender.com/api-docs/).

## Współtwórcy

Dziękuję tym wspaniałym ludziom:

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
