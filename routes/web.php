<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/', function () {
    return view('welcome');
});
*/

// Use the React Router.
Route::view('/home/{path?}', 'app');

Auth::routes();

// TODO: I don't think I'll need this one?
//Route::get('/home', 'HomeController@index')->name('home');
