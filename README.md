# php-react-task-list
My implementation of the Laravel Task List Quickstart with a React frontend.

I like this one better than my last attempt, but I'm a bit stuck on the authentication bit.  I really should have implemented authentication *first*.  I'm going to start another project experimenting with Laravel/React authentication.

## Setting up the development environment
**WARNING: There are probably some extra steps here.**

1. `composer create-project laravel/laravel`
    * This command put everything in a `.laravel` sub-folder.  I moved everything up a level.
2. `composer install`
    * Required when reloading a fresh copy of the project, but doesn't do anything at this point.
3. `php artisan preset react`
4. `npm install && npm run dev`

`composer require laravel/ui`
* This resolves an incompatibility issue between Laravel Mix and the latest version of sass-loader:
    * `npm uninstall --save-dev sass-loader`
    * `npm install --save-dev sass-loader@7.1.0`
`php artisan ui react`
`php artisan ui react --auth`


5. After making code changes, rerun `npm run dev`.
6. Run `npm run watch` to recompile as you go.
7. `php artisan serve`

## Database setup
1. `cd ./database`
2. `sqlite3`
3. `.open task_list.sqlite`
4. Ctrl+Z
5. In .env:
    * DB_CONNECTION=sqlite
    * DB_DATABASE={full path to task_list.sqlite}
6. `php artisan make:migration create_tasks_table --create=tasks`
7. `php artisan migrate`
8. `php artisan make:model Task`
    * `php artisan make:model Task -m` would have also created the database migration.
9. `php artisan make:controller TaskController`

## References
* [Using React in a Laravel application](https://blog.pusher.com/react-laravel-application/)

## TODO
* Need to figure out how to get authentication to work through the API.
