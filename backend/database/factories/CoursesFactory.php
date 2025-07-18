<?php

namespace Database\Factories;

use App\Models\Courses;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Courses>
 */
class CoursesFactory extends Factory
{

    protected $model = Courses::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => fake()->sentence(1),
            'description' => fake()->sentence(50),
            'price'=> $this->faker->randomFloat(2, 10, 500),
            /*'instructor_id'=> 1, // set a real user ID that exists*/
        ];
    }
}
