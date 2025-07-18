<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EnrollmentsResource\Pages;
use App\Filament\Resources\EnrollmentsResource\RelationManagers;
use App\Models\Enrollments;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EnrollmentsResource extends Resource
{
    protected static ?string $model = Enrollments::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Forms\Components\Select::make('user_Id')
                    ->relationship('user','name')
                    ->searchable()
                    ->required(),
                Forms\Components\Select::make('course_Id')
                    ->relationship('course','name')
                    ->searchable()
                    ->required(),
                Forms\Components\TextInput::make('progress_percentage')
                    ->numeric()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                Tables\Columns\TextColumn::make('user.name'),
                Tables\Columns\TextColumn::make('course.name'),
                Tables\Columns\TextColumn::make('progress_percentage'),
                Tables\Columns\TextColumn::make('enrolled_at'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEnrollments::route('/'),
            'create' => Pages\CreateEnrollments::route('/create'),
            'edit' => Pages\EditEnrollments::route('/{record}/edit'),
        ];
    }
}
