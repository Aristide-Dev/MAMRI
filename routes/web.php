<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Importation de tous les contrôleurs
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AccueilController;
use App\Http\Controllers\AProposController;
use App\Http\Controllers\MissionsController;
use App\Http\Controllers\DirectionsController;
use App\Http\Controllers\PartenariatsController;
use App\Http\Controllers\ActualitesController;
use App\Http\Controllers\ContactController;

Route::get('/', [AccueilController::class, 'index'])->name('welcome');

// À Propos
Route::prefix('a-propos')->group(function() {
    Route::get('/', [AProposController::class, 'index'])->name('about');
    Route::get('/contexte-creation', [AProposController::class, 'contexte'])->name('about.contexte');
    Route::get('/cadre-juridique', [AProposController::class, 'cadreJuridique'])->name('about.cadre_juridique');
    Route::get('/objectifs-enjeux', [AProposController::class, 'objectifsEnjeux'])->name('about.objectifs_enjeux');
    Route::get('/principes-action', [AProposController::class, 'principesAction'])->name('about.principes_action');
    Route::get('/organisation', [AProposController::class, 'organisation'])->name('about.organisation');
    Route::get('/partenaires', [AProposController::class, 'partenaires'])->name('about.partenaires');
});

// Missions et Axes Stratégiques
Route::prefix('missions')->group(function() {
    Route::get('/', [MissionsController::class, 'index'])->name('missions.index');
    Route::get('/generales', [MissionsController::class, 'generales'])->name('missions.generales');
    Route::get('/niveaux-intervention', [MissionsController::class, 'niveauxIntervention'])->name('missions.niveaux_intervention');
    Route::get('/thematiques', [MissionsController::class, 'thematiques'])->name('missions.thematiques');
});

// Les Directions de Projet
Route::prefix('directions')->group(function() {
    // Ressources fiscales
    Route::prefix('fiscales')->group(function() {
        Route::get('/', [DirectionsController::class, 'fiscales'])->name('directions.fiscales');
        Route::get('/organisation-missions', [DirectionsController::class, 'fiscalesOrganisation'])->name('directions.fiscales_organisation');
        Route::get('/contexte-reformes-etudes', [DirectionsController::class, 'fiscalesContexte'])->name('directions.fiscales_contexte');
    });

    // Ressources douanières
    Route::prefix('douanieres')->group(function() {
        Route::get('/', [DirectionsController::class, 'douanieres'])->name('directions.douanieres');
        Route::get('/organisation-missions', [DirectionsController::class, 'douanieresOrganisation'])->name('directions.douanieres_organisation');
        Route::get('/reformes-resultats-perspectives', [DirectionsController::class, 'douanieresReformes'])->name('directions.douanieres_reformes');
    });

    // Ressources non fiscales
    Route::prefix('non-fiscales')->group(function() {
        Route::get('/', [DirectionsController::class, 'nonFiscales'])->name('directions.non_fiscales');
        Route::get('/definition-enjeux-reformes', [DirectionsController::class, 'nonFiscalesDefinition'])->name('directions.non_fiscales_definition');
    });

    // Maîtrise des dépenses fiscales et apurement des arriérés
    Route::prefix('depenses')->group(function() {
        Route::get('/', [DirectionsController::class, 'depenses'])->name('directions.depenses');
        Route::get('/depenses-fiscales', [DirectionsController::class, 'depensesFiscales'])->name('directions.depenses_fiscales');
        Route::get('/arrieres-fiscaux', [DirectionsController::class, 'arrieresFiscaux'])->name('directions.arrieres_fiscaux');
    });

    // Digitalisation
    Route::prefix('digitalisation')->group(function() {
        Route::get('/', [DirectionsController::class, 'digitalisation'])->name('directions.digitalisation');
        Route::get('/enjeux-strategies-diagnostic', [DirectionsController::class, 'digitalisationEnjeux'])->name('directions.digitalisation_enjeux');
        Route::get('/renforcement-capacites-projets', [DirectionsController::class, 'digitalisationRenforcement'])->name('directions.digitalisation_renforcement');
    });
});

// Partenariats et Soutiens Techniques
Route::prefix('partenariats')->group(function() {
    Route::get('/', [PartenariatsController::class, 'index'])->name('partenariats.index');
    Route::get('/institutionnels', [PartenariatsController::class, 'institutionnels'])->name('partenariats.institutionnels');
    Route::get('/roles', [PartenariatsController::class, 'roles'])->name('partenariats.roles');
    Route::get('/projets-resultats', [PartenariatsController::class, 'projetsResultats'])->name('partenariats.projets_resultats');
});

// Actualités et Ressources
Route::prefix('actualites')->group(function() {
    Route::get('/', [ActualitesController::class, 'index'])->name('actualites.index');
    Route::get('/communiques-ateliers-seminaires', [ActualitesController::class, 'communiques'])->name('actualites.communiques');
    Route::get('/rapports-publications', [ActualitesController::class, 'rapports'])->name('actualites.rapports');
    Route::get('/medias', [ActualitesController::class, 'medias'])->name('actualites.medias');
});

// Contact
Route::prefix('contact')->group(function() {
    Route::get('/', [ContactController::class, 'index'])->name('contact.index');
    Route::get('/formulaire', [ContactController::class, 'formulaire'])->name('contact.formulaire');
    Route::get('/coordonnees', [ContactController::class, 'coordonnees'])->name('contact.coordonnees');
    Route::get('/plan-acces', [ContactController::class, 'planAcces'])->name('contact.plan_acces');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';