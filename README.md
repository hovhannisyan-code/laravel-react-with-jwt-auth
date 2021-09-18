<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://camo.githubusercontent.com/32cb06adae8b7d1a518da1533f9e68a048e64240fc495afa99245a605e4026c4/68747470733a2f2f7175616e74697a642e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30342f6c61726176656c2d72656163742e706e67" width="400"></a></p>

# Laravel(8.6.0) and React(17.0.2) with JWT Authentication
User Login & Signup API

## Prerequisite

1. Make sure you have [composer](https://getcomposer.org/download/) installed.
2. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

### Setup and Installation
- `git clone`
#### Laravel
- `create a .env file copy content from .env.example and update the values`
- `Update DB_HOST, DB_DATABASE, DB_USERNAME and DB_PASSWORD in .env file to yours.`
- `composer install && composer update`
- `php artisan migrate:refresh`
- `php artisan key:generate`
- `php artisan jwt:secret`
- `php artisan serve`
#### React
 - `create a .env file copy content from .env.example and update the values`
 - `Update REACT_APP_API_URL and REACT_APP_JWT_SECRET(copy from  laravel .env file)`
 - `npm install`
 - `npm start`

