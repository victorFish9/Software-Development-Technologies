import { test, describe, expect } from '@jest/globals'; // https://jestjs.io/docs/expect
import { strict as assert } from 'node:assert';         // https://nodejs.org/api/assert.html

import { finnishDateString } from '../dateFormatter';   // the function to be tested


describe('finnishDateString', () => {
    test('returns a date string', () => {
        const date = new Date('maanantai 1. tammikuuta 2024')
        const result = finnishDateString(date)
        expect(result).toBeTruthy()
    })
})
