import * as readline from 'readline';
import { fetchRelatedPeople } from './commands/fetchRelatedPeople';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askForInput = () => {
  rl.question('Please enter a Star Wars search term (enter exit to close the app): ', (input) => {
    const processedInput = input.trim().toLowerCase();
    if (processedInput === 'exit') {
        console.log('Exiting the app...');
        rl.close();
    } else {
        fetchRelatedPeople(processedInput).then((result) => {

          result.map(r => {
            console.log(r.type);
            console.log(r.people);
            console.log("--");
          });
          askForInput();});
        
    }
  });
};

askForInput();
