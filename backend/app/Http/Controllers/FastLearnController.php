<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BookResource;
use App\Book;

class FastLearnController extends Controller {

  public function hello() {
    return 'こんにちは、世界！';
  }

  public function bookList() {
    return BookResource::collection(Book::all());
  }

  // public function param() {
  //   return 'Paramページ';
  // }
}
