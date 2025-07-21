<?php

namespace App\Models;

use Database\Factories\CoursesFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @method static factory()
 * @method static findOrFail($id)
 * @method static find($id)
 */
class Courses extends Model
{

    /** @use HasFactory<CoursesFactory> */
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'instructor_id',
    ];


    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function enrollments() : HasMany
    {
        return $this->hasMany(Enrollments::class);
    }


}
