import axios from "axios";

const url = "http://localhost:3001/events";

// ✅ Récupérer tous les événements ou un événement spécifique (si ID fourni)
export const getAllEvents = async (id = "") => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error.message);
    throw error;
  }
};

// ✅ Ajouter un nouvel événement
export const addEvent = async (event) => {
  try {
    const response = await axios.post(url, event);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'événement :", error.message);
    throw error;
  }
};

// ✅ Mettre à jour un événement (axios version)
export const editEvent = async (id, updatedData) => {
  try {
    const response = await axios.put(`${url}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'événement :", error.message);
    throw error;
  }
};

// ✅ Supprimer un événement
export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'événement :", error.message);
    throw error;
  }
};

// ✅ Récupérer un seul événement (optionnel si tu veux séparer de getAllEvents)
export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'événement :", error.message);
    throw error;
  }
};
