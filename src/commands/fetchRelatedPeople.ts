import { search } from "../swapi/services/search";
import { SearchResults } from "../swapi/models/SearchResults";
import { FilmImpl } from "../swapi/models/FilmImpl";
import { PlanetImpl } from "../swapi/models/PlanetImpl";
import { SpeciesImpl } from "../swapi/models/Specimen";
import { VehicleImpl } from "../swapi/models/Vehicle";
import { StarshipImpl } from "../swapi/models/Starship";
import { RelevantPeople } from "../core/RelevantPeople";

export const fetchRelatedPeople = async (name: string): Promise<FilmImpl[] | StarshipImpl[]> => {

    console.log('Searching...' + name);
    
    const relevantPeople = await Promise.all([
        search<SearchResults<FilmImpl>>("films", name),
        search<SearchResults<PlanetImpl>>("planets", name),
        search<SearchResults<SpeciesImpl>>("species", name),
        search<SearchResults<VehicleImpl>>("vehicles", name),
        search<SearchResults<StarshipImpl>>("starships", name)
      ]).then(([filmSearchResults, planetSearchResults, speciesSearchResults, vehiclesSearchResults, starshipsSearchResults]) => {

        const films = filmSearchResults.results.map(element =>
          FilmImpl.fromObject(element));

        const planets = planetSearchResults.results.map(element =>
          PlanetImpl.fromObject(element));

          const species = speciesSearchResults.results.map(element =>
          SpeciesImpl.fromObject(element));
          
        const vehicles = vehiclesSearchResults.results.map(element =>
          VehicleImpl.fromObject(element));
          
        const starships = starshipsSearchResults.results.map(element =>
          StarshipImpl.fromObject(element));

          return Promise.all([...films, ...planets, ...species, ...vehicles, ...starships])
      });

    return relevantPeople;
};
