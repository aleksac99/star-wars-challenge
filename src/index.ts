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
          console.log(relatedPeople.toString());
          askForInput();});
        
    }
  });
};

askForInput();
