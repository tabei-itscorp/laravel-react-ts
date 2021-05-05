<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TodoResource;
use App\Todo;

class TodoController extends Controller {

  public function getAll() {
    return TodoResource::collection(Todo::all());
  }

  public function add(Request $request) {
    $todo = Todo::create([
      'title' => $request->title,
      'completed' => $request->completed
    ]);
    return new TodoResource($todo);
  }

  public function update(Request $request, $id) {
    $todo = Todo::where('id', $id)->first();
    $todo->completed = $request->completed;
    $todo->save();
    return new TodoResource($todo);
  }

  public function delete(Request $request, $id) {
    Todo::where('id', $id)->delete();
    return $id;
  }
}
