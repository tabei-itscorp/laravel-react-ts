<?php

use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-8222-5399-8',N'Visual C# 2019超入門',2000,N'日経BP','2019-08-22')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7980-5759-0',N'はじめてのAndroidアプリ開発',3200,N'秀和システム','2019-08-10')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7981-5112-0',N'独習Java 新版',2980,N'翔泳社','2019-05-15')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7741-9763-0',N'3ステップでしっかり学ぶ Python',2480,N'技術評論社','2018-05-24')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7741-9617-6',N'Swiftポケットリファレンス',2880,N'技術評論社','2018-03-09')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7981-5382-7',N'独習C# 新版',3600,N'翔泳社','2017-12-15')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-295-00409-7',N'これから学ぶJavaScript',2400,N'インプレス','2018-07-20')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-295-00638-1',N'これから学ぶHTML/CSS',2400,N'インプレス','2019-06-21')");
    DB::insert("INSERT INTO books (isbn, title, price, publisher, published) VALUES ('978-4-7981-5757-3',N'JavaScript逆引きレシピ',2800,N'翔泳社','2018-10-15')");
  }
}
