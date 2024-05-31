import { readFileSync } from 'fs';
import path from 'path';


const csvFile: string = path.join(__dirname, '..', 'postalcodes.csv');


const fileContents: string = readFileSync(csvFile, 'utf-8');


const lines: string[] = fileContents.trim().split('\n');


const params: string[] = process.argv;


if (params.length !== 3) {
    console.log('Please provide a city name or postal code as a command line argument.');
} else {
    let input: string = params[2].trim();


    input = input.charAt(0).toUpperCase() + input.slice(1);

    if (isNaN(Number(input))) {

        const postalCodes = findPostalCodesForCity(input, lines);
        if (postalCodes.length > 0) {
            console.log(postalCodes.join(', '));
        } else {
            console.log(`City ${input} not found.`);
        }
    } else {

        const location = findLocationForPostalCode(input, lines);
        if (location) {
            console.log(`Postal Code: ${input}, Location: ${location}`);
        } else {
            console.log(`Postal Code ${input} not found.`);
        }
    }
}


function findPostalCodesForCity(city: string, data: string[]): string[] {
    const postalCodes: string[] = [];

    for (const line of data) {
        const [code, location] = line.trim().split(',');
        if (location.trim().toUpperCase() === city.toUpperCase()) {
            postalCodes.push(code);
        }
    }

    return postalCodes.sort();
}

function findLocationForPostalCode(postalCode: string, data: string[]): string | undefined {
    for (const line of data) {
        const [code, location] = line.trim().split(',');
        if (code === postalCode) {
            return location;
        }
    }
    return undefined;
}
