<?php

namespace Database\Seeders;

use App\Models\Courses;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $instructor = User::factory()->create([
            'name' => 'Instructor John',
            'email' => 'instructor@test.com',
            'role' => 'student',
            'password' => bcrypt('password'), // Important: hash passwords
        ]);

        //students
        User::factory(50)->create(['role' => 'student']);

        //courses assigned to the instructor
        Courses::factory()->count(12)->create([
            'instructor_id' => $instructor->id,
        ]);

    }
}
