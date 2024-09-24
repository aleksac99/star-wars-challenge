import { search } from "../swapi/services/search";
import { SearchResults } from "../swapi/models/SearchResults";
import { Film } from "../swapi/models/Film";
import { Planet } from "../swapi/models/Planet";
import { Species } from "../swapi/models/Species";
import { Vehicle } from "../swapi/models/Vehicle";
import { Starship } from "../swapi/models/Starship";
import { RelevantPeople } from "../core/RelevantPeople";
import { Resource } from "../swapi/models/Resource";

export const fetchRelatedPeople = async (name: string): Promise<Resource[]> => {

    console.log('Searching...' + name);

    const relevantPeople = await Promise.all([
        search<SearchResults<Film>>(Film.resource, name),
        search<SearchResults<Planet>>(Planet.resource, name),
        search<SearchResults<Species>>(Species.resource, name),
        search<SearchResults<Vehicle>>(Vehicle.resource, name),
        search<SearchResults<Starship>>(Starship.resource, name)
      ]).then(([filmSearchResults, planetSearchResults, speciesSearchResults, vehiclesSearchResults, starshipsSearchResults]) => {

        const films = filmSearchResults.results.map(element =>
          Film.fromObject(element));

        const planets = planetSearchResults.results.map(element =>
          Planet.fromObject(element));

          const species = speciesSearchResults.results.map(element =>
          Species.fromObject(element));
          
        const vehicles = vehiclesSearchResults.results.map(element =>
          Vehicle.fromObject(element));
          
        const starships = starshipsSearchResults.results.map(element =>
          Starship.fromObject(element));

          return Promise.all([...films, ...planets, ...species, ...vehicles, ...starships])
      });

    return relevantPeople;
};
