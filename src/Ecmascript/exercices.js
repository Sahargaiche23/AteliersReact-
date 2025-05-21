// 🔁 Import de la fonction Search (en haut du fichier uniquement)
import { Search } from "./fonction.js";

// 🔹 Trouver le mot le plus long
const findLongestWord = (words) => {
  const [first, ...rest] = words;
  const wordsWithLength = words.map(word => ({
    mot: word,
    longueur: word.length
  }));
  const longest = wordsWithLength.reduce((prev, current) =>
    current.longueur > prev.longueur ? current : prev
  );
  return longest;
};

const result1 = findLongestWord(["chat", "hippopotame", "chien", "lion"]);
console.log("Mot le plus long:", result1);

// 🔹 Compter les occurrences
const countOccurrences = (array) => {
  return array.flat().reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

const input2 = [["apple", "banana"], ["apple", "orange"]];
const result2 = countOccurrences(input2);
console.log("Occurrences:", result2);

// 🔹 Somme des notes > 50 après bonus
const notes = [45, 78, 34, 90, 12, 59];

const total = notes
  .map(note => (note < 50 ? note + 15 : note))
  .filter(note => note > 50)
  .reduce((acc, note) => acc + note, 0);

console.log("Total des notes > 50 après bonus:", total);

// 🔹 Gestion d’un tableau d’objets avec ID
let lastId = 0;
const Tab = [];

const addElement = (nom, age) => {
  lastId++;
  Tab.push({ id: lastId, nom, age });
};

addElement("Alice", 25);
addElement("Bob", 30);
addElement("Charlie", 22);

console.log("Tableau Tab:", Tab);

// 🔹 Utiliser la fonction Search
const result4 = Search(Tab, 2);
console.log("Résultat de la recherche par ID:", result4);
