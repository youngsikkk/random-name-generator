export type Gender = 'male' | 'female';
export interface EnglishNameOptions {
    gender?: Gender;
    lastName?: boolean;
    firstName?: boolean;
}
export declare function english(genderOrOptions?: Gender | EnglishNameOptions): string;
