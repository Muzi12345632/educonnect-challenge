<?php

namespace App\Filament\Widgets;
use App\Models\User;
use App\Models\Enrollments;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;


class StudentCount extends ChartWidget
{
    protected static ?string $heading = 'Enrollments Chart';

    protected function getData(): array
    {

        $data = Trend::model(Enrollments::class)->between(
            start: now()->StartOfWeek(),
            end: now()->endOfMonth(),
            )
            ->perDay()
            ->count();

        return [
            //
            'datasets' => [
                [
                    'label' => 'Students Enrollment Status',
                    'data' => $data->map(fn (TrendValue $value) => $value->aggregate),
                ],
            ],
            'labels' => $data->map(fn (TrendValue $value) => $value->date),

        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
