import { Todo } from './Todo.js';

const blynai = new Todo('Blynu kepimas');

blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i keptuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti kaitlente');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla')

blynai.remove(4);
blynai.taskCompleted(0);
blynai.taskCompleted(1);
blynai.taskCompleted(2);

blynai.summary();

blynai.print();
blynai.printCompletedOnly();
blynai.printNotCompletedOnly();

const obj = new Todo('Torto virimas')

for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
  }