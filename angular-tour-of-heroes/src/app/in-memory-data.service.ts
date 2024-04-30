// Angular in-memory web api module
// This provides the InMemoryDataService as a parameter for the .forRoot method of the InMemoryServiceiModule module.
// Overrides the createDb() method.

import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "BrUther" },
      { id: 12, name: "Spooderman" },
      { id: 13, name: "Sig-Fed" },
      { id: 14, name: "Jerma" },
      { id: 15, name: "THE KING" },
      { id: 16, name: "MOTHER" },
      { id: 17, name: "Pirate Skeleton" },
      { id: 18, name: "Dr Green" },
      { id: 19, name: "Nuric" },
      { id: 20, name: "Dev" },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
