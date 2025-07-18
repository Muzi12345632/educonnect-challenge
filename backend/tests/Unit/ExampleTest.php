<?php

namespace Tests\Unit;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\Framework\TestCase;
use App\Models\User;
use App\Models\Courses;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @method actingAs(User|Collection|Model $user, string $string)
 * @method postJson(string $string, array $array)
 * @method getJson(string $string)
 */
class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
    }

    


}
