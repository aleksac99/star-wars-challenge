import * as readline from 'readline';
import { fetchRelatedPeople } from './commands/fetchRelatedPeople';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askForInput = () => {
  rl.question('Please enter a Star Wars search term (enter exit to close the app): ', (input) => {
    const query = input.trim().toLowerCase();
    if (query === 'exit') {
        console.info('Exiting the app...');
        rl.close();
    } else {
      console.info(`Searching ${query}`);
        fetchRelatedPeople(query).then((relatedPeople) => {
          console.info(relatedPeople.resources.length != 0 ? relatedPeople.toString() : `No related term found for ${query}`);
          askForInput();}).catch(error => {
            console.info("Service currently unavailable.");
            rl.close();
          });
    }
  });
};

askForInput();
