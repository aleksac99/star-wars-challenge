import { describe, test, expect } from "@jest/globals"
import { fetchRelatedPeople } from '../../src/commands/fetchRelatedPeople';

describe("Test fetching of related people", () => {
    test('Test Species: search term `WOOK`', async () => {

        const query = 'WOOK';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Wookie | Species | Chewbacca, Tarfful");
    });
    test('Test Planet: search term `tatoo`', async () => {

        const query = 'tatoo';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Tatooine | Planet | Luke Skywalker, C-3PO, Darth Vader, Owen Lars, Beru Whitesun lars, R5-D4, Biggs Darklighter, Anakin Skywalker, Shmi Skywalker, Cliegg Lars");
    });
    test('Test Vehcle: search term `snow`', async () => {

        const query = 'snow';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Snowspeeder | Vehicle | Luke Skywalker, Wedge Antilles");
    });
    test('Test Film: search term `Empire`', async () => {

        const query = 'Empire';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("The Empire Strikes Back | Film | Luke Skywalker, C-3PO, R2-D2, Darth Vader, Leia Organa, Obi-Wan Kenobi, Chewbacca, Han Solo, Wedge Antilles, Yoda, Palpatine, Boba Fett, IG-88, Bossk, Lando Calrissian, Lobot, Irvin Kershner, Gary Kurtz, Rick McCallum");
    });
    test('Test Starship: search term `Millen`', async () => {

        const query = 'Millen';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Millennium Falcon | Starship | Chewbacca, Han Solo, Lando Calrissian, Nien Nunb");
    });
    test('Test multiple: search term `ale`', async () => {

        const query = 'ale';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Saleucami | Planet | No related people found\nAleen Minor | Planet | Ratts Tyerel\nKalee | Planet | Grievous\nAleena | Species | Ratts Tyerel\nKaleesh | Species | Grievous");
    });
    test('Test with no related people: search term `saleu`', async () => {

        const query = 'saleu';
        const result = await fetchRelatedPeople(query);
        expect(result.toString()).toMatch("Saleucami | Planet | No related people found");
    });
});