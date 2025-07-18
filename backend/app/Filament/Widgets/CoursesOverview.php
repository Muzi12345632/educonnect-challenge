<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Courses;
use App\Models\User;
use App\Models\Enrollments;

class CoursesOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            //
            Stat::make('Number of Courses',Courses::all()->count() ),
            Stat::make('Total Number of Students', User::all()->count() ),
            Stat::make('Total Enrollments', Enrollments::all()->count()),
        ];
    }
}
