export type Gender = 'male' | 'female';
export interface KoreanNameOptions {
    gender?: Gender;
    lastName?: boolean;
    firstName?: boolean;
}
export declare function korean(genderOrOptions?: Gender | KoreanNameOptions): string;
