import { englishLastNames, englishMaleNames, englishFemaleNames } from './data/english';

export type Gender = 'male' | 'female';

export interface EnglishNameOptions {
  gender?: Gender;
  lastName?: boolean;
  firstName?: boolean;
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomGender(): Gender {
  return Math.random() < 0.5 ? 'male' : 'female';
}

function getFirstName(gender: Gender): string {
  return gender === 'male' ? randomItem(englishMaleNames) : randomItem(englishFemaleNames);
}

function getLastName(): string {
  return randomItem(englishLastNames);
}

export function english(genderOrOptions?: Gender | EnglishNameOptions): string {
  // Handle string gender argument
  if (typeof genderOrOptions === 'string') {
    const gender = genderOrOptions;
    return getFirstName(gender) + ' ' + getLastName();
  }

  // Handle options object
  const options = genderOrOptions || {};
  const gender = options.gender || getRandomGender();

  // Return only lastName
  if (options.lastName && !options.firstName) {
    return getLastName();
  }

  // Return only firstName
  if (options.firstName && !options.lastName) {
    return getFirstName(gender);
  }

  // Return full name (default)
  return getFirstName(gender) + ' ' + getLastName();
}
