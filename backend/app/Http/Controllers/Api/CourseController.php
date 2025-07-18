<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Courses;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    //
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(Courses::all());
    }

    public function show($id): \Illuminate\Http\JsonResponse
    {
        return response()->json(Courses::all()->find($id));
    }

    public function enroll($id): \Illuminate\Http\JsonResponse
    {
        /** @var User $user */
        $user = Auth::user();
        if ($user->role !== 'student') {
            return response()->json(['message' => 'Only students can enroll'], 403);
        }

        $course = Courses::findOrFail($id);

        if ($user->enrollments()->where('course_id', $course->id)->exists()) {
            return response()->json(['message' => 'Already enrolled'], 400);
        }

        $user->enrollments()->create([
            'course_id' => $course->id,
            'progress_percentage' => 0,
            'enrolled_at' => now(),
        ]);

        return response()->json(['message' => 'Enrolled successfully']);
    }

    public function myCourses(): \Illuminate\Http\JsonResponse
    {
        /** @var User $user */
        $user = Auth::user();

        // Get enrolled courses via enrollments
        $courses = $user->enrollments()
            ->with('course') //courses() relationship in Enrollment
            ->get()
            ->pluck('course'); //returns only the course models

        return response()->json(['courses' => $courses], 200);
    }

}
