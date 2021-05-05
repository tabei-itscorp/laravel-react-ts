<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller {

  public function getAllUsers() {
    $users = User::all();
    return response()->json(['users' => $users]);
  }

  public function getUser(User $user) {
    return response()->json(['user' => $user]);
  }
}
