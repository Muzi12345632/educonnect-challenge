<?php

namespace App\Filament\Resources\EnrollmentsResource\Pages;

use App\Filament\Resources\EnrollmentsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEnrollments extends EditRecord
{
    protected static string $resource = EnrollmentsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
