<?php

use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::insert("INSERT INTO todos (title, completed) VALUES (N'Angularの学習','false')");
    DB::insert("INSERT INTO todos (title, completed) VALUES (N'Vue.jsの学習','false')");
    DB::insert("INSERT INTO todos (title, completed) VALUES (N'Reactの学習','true')");
  }
}
