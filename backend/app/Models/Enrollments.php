<?php

namespace App\Models;

use Database\Factories\CoursesFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enrollments extends Model
{

    /** @use HasFactory<CoursesFactory> */
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'course_id',
        'progress_percentage',
        'enrolled_at',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Courses::class,'course_id');
    }

}
