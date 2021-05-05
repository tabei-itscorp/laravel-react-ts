<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'api'], function() {
  // Route::get('user', function(Request $request) {
  //   $users = App\User::all();
  //   return response()->json(['users' => $users]);
  // });
  Route::get('user', 'UserController@getAllUsers');
  // Route::get('user/{user}', function(App\User $user) {
  //   return response()->json(['user' => $user]);
  // });
  Route::get('user/{user}', 'UserController@getUser');

  Route::get('hello', 'FastLearnController@hello');
  Route::get('bookList', 'FastLearnController@bookList');

  Route::get('todo/getAll', 'TodoController@getAll');
  Route::post('todo/add', 'TodoController@add');
  Route::put('todo/update/{id}', 'TodoController@update');
  Route::delete('todo/delete/{id}', 'TodoController@delete');
});