import { search } from "../swapi/services/search";
import { SearchResults } from "../swapi/models/SearchResults";
import { Film } from "../swapi/models/Film";
import { Planet } from "../swapi/models/Planet";
import { Species } from "../swapi/models/Species";
import { Vehicle } from "../swapi/models/Vehicle";
import { Starship } from "../swapi/models/Starship";
import { RelatedPeople } from "../core/RelatedPeople";
import { Person } from "../swapi/models/Person";

export const fetchRelatedPeople = async (query: string): Promise<RelatedPeople> => {

    const searchResults = await Promise.all([
        search<SearchResults<Person>>(Person.resource, query),
        search<SearchResults<Film>>(Film.resource, query),
        search<SearchResults<Planet>>(Planet.resource, query),
        search<SearchResults<Species>>(Species.resource, query),
        search<SearchResults<Vehicle>>(Vehicle.resource, query),
        search<SearchResults<Starship>>(Starship.resource, query)
      ]).then(([personSearchResults, filmSearchResults, planetSearchResults, speciesSearchResults, vehiclesSearchResults, starshipsSearchResults]) => {

        const people = personSearchResults.results.map(element =>
          Person.fromObject(element));

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

          return Promise.all([...people , ...films, ...planets, ...species, ...vehicles, ...starships])
      });

    const relatedPeople = new RelatedPeople(query, searchResults);
    return relatedPeople;
};
