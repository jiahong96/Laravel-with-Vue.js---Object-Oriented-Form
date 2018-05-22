<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        //create system and admin user
        factory(App\User::class)->create(['name' => 'system', 'password' => 'a']); 
        factory(App\User::class)->create(['name' => 'admin',  'password' => 'a']); 
    }
}
