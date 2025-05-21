// src/App.js
import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 📦 TD2 : Composants d’exercices
import Counter from './TD2propState/Counter.jsx';
import ListManager from './TD2propState/ListManager.jsx';
import ColorBox from './TD2propState/ColorBox.jsx';
import NoteManager from './TD2propState/NoteManager.jsx';
import TodoList from './TD2propState/TodoList.jsx';
import UsersCRUD from './Components/UsersCRUD.jsx'; // Importer le composant UsersCRUD

// 📦 Composants principaux (chargement différé avec lazy)
const Events = lazy(() => import('./Components/Events.jsx'));
const NavigationBar = lazy(() => import('./Components/Navbar.jsx'));
const EventDetails = lazy(() => import('./Components/EventDetails.jsx'));
const NotFound = lazy(() => import('./Components/NotFound.jsx'));
const AddEvent = lazy(() => import('./Components/AddEvent.jsx'));
const UpdateEvent = lazy(() => import('./Components/UpdateEvent.jsx'));

const App = () => {
  return (
    <>
      {/* ✅ Barre de navigation affichée sur toutes les pages */}
      <Suspense fallback={<div className="text-center mt-3">Chargement de la navigation...</div>}>
        <NavigationBar />
      </Suspense>

      {/* ✅ Routing avec contenu selon l'URL */}
      <Suspense fallback={<div className="text-center mt-5">Chargement de la page...</div>}>
        <Routes>
          {/* 🏠 Accueil */}
          <Route
            path="/"
            element={
              <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                <h1 style={{ textAlign: 'center' }}>🌟 Exercices State & Props (React)</h1>

                <section>
                  <h2>Exercice 1 : Compteur</h2>
                  <Counter initialCount={5} step={2} />
                </section>

                <hr />

                <section>
                  <h2>Exercice 2 : Liste Dynamique</h2>
                  <ListManager
                    initialItems={['React', 'Angular', 'VueJs']}
                    placeholder="Ajouter un framework..."
                  />
                </section>

                <hr />

                <section>
                  <h2>Exercice 3 : Boîte de Couleur</h2>
                  <ColorBox
                    initialColor="#ffcccc"
                    colorOptions={['#f00', '#0f0', '#00f', '#ff0', '#0ff']}
                  />
                </section>

                <hr />

                <section>
                  <h2>Exercice 4 : Gestionnaire de Notes</h2>
                  <NoteManager initialNotes={[14, 16, 18]} />
                </section>

                <hr />

                <section>
                  <h2>Exercice 5 : Todo List avec Priorités</h2>
                  <TodoList
                    initialTasks={[
                      { name: 'Réviser React', priority: 'Haute', done: false },
                      { name: 'Acheter du pain', priority: 'Basse', done: true },
                    ]}
                  />
                </section>
              </div>
            }
          />

          {/* 📅 Page des événements */}
          <Route path="/events" element={<Events />} />

          {/* 🔍 Détail d’un événement */}
          <Route path="/events/:name" element={<EventDetails />} />

          {/* ➕ Ajouter un événement */}
          <Route path="/add-event" element={<AddEvent />} />

          {/* ✏️ Modifier un événement */}
          <Route path="/update-event/:id" element={<UpdateEvent />} />

          {/* Route principale vers la liste des utilisateurs */}
          <Route path="/users" element={<UsersCRUD />} />

          {/* ❌ Route non trouvée - toujours la dernière */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
