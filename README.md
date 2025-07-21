# EduConnect App

![Laravel](https://img.shields.io/badge/Laravel-10.x-red?style=for-the-badge&logo=laravel)
![Filament](https://img.shields.io/badge/Filament-Admin-00B5AD?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iIzAwQjVBRCIvPjwvc3ZnPg==)
![PHP](https://img.shields.io/badge/PHP-8.2-blue?style=for-the-badge&logo=php)
![MySQL](https://img.shields.io/badge/MySQL-5.7-orange?style=for-the-badge&logo=mysql)
![React Native](https://img.shields.io/badge/React_Native-0.74-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-5.x-black?style=for-the-badge&logo=expo)
![Composer](https://img.shields.io/badge/Composer-Installed-blue?style=for-the-badge&logo=composer)


## 🚀 Project Setup (Laravel Backend)
### 🧾 Requirements

````
PHP 8.1 or later

Composer

MySQL 5.7+ or MariaDB

Node.js & NPM (for compiling frontend assets, optional)

Laravel 10+

Laravel Sanctum 

````

### 🛠️ Installation Steps

```
# 1. Clone the repository
https://github.com/Muzi12345632/educonnect-challenge.git
cd educonnect-challenge/backend

# 2. Install PHP dependencies
composer install

# 3. Copy .env file and generate app key
cp .env.example .env
php artisan key:generate

# 4. Configure database connection in .env
# DB_DATABASE=your_db_name
# DB_USERNAME=your_db_user
# DB_PASSWORD=your_db_pass

# 5. Run migrations and seeders
php artisan migrate --seed

# 6. Serve the application
php artisan serve
```

### 📌 Test User Credentials

#### A test user is created by default during seeding:
| Field    | Value                 |
| -------- | --------------------- |
| Name     | Instructor John       |
| Email    | `instructor@test.com` |
| Role     | `student`             |
| Password | `password`            |


### 🧪 Testing the API

#### Use **Postman** or any REST client to test API routes like:

| Method | Endpoint                   | Description                |
| ------ | -------------------------- | -------------------------- |
| POST   | `/api/auth/login`          | Index and receive token    |
| GET    | `/api/courses`             | List all available courses |
| GET    | `/api/courses/{id}`        | View course details        |
| POST   | `/api/courses/{id}/enroll` | Enroll in a course         |
| GET    | `/api/my-courses`          | View enrolled courses      |

#### 🔐 Make sure to include Authorization: Bearer {token} in your headers after login.
<br>

## 📱 Mobile Setup (React Native Frontend with Expo)

### 🧾 Requirements
```
Node.js 18+

Expo CLI (install globally)

Git

Android Studio / iOS Simulator or Expo Go app for testing

```

### 🛠️ Installation Steps

```
1. Clone the frontend repo
https://github.com/Muzi12345632/educonnect-challenge.git
cd educonnect-challenge/mobile/EduconnectApp

2. Install dependencies
npm install

3. Start the Expo development server
npx expo start
```

### 🔐 Test Credentials
Use the same test user seeded from the backend: ``` http://localhost:8081/login```

| Email                                             | Password   | Role    |
| ------------------------------------------------- | ---------- | ------- |
| [instructor@test.com](mailto:instructor@test.com) | `password` | student |

