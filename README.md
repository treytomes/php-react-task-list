# php-react-task-list
My implementation of the Laravel Task List Quickstart with a React frontend.

## Setting up the development environment
1. `composer create-project laravel/laravel`
    * This command put everything in a `.laravel` sub-folder.  I moved everything up a level.
2. `composer install`
    * Required when reloading a fresh copy of the project, but doesn't do anything at this point.
3. `php artisan preset react`
4. `npm install && npm run dev`
5. After making code changes, rerun `npm run dev`.
6. Run `npm run watch` to recompile as you go.
7. `php artisan serve`

## References
* [Using React in a Laravel application](https://blog.pusher.com/react-laravel-application/)
