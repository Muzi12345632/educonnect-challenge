<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    // Return logged-in user info
    public function user(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'user' => Auth::user()
        ]);
    }
}
