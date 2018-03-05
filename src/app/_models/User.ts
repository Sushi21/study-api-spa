import { Photo } from './Photo';


export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    created: Date;
    lastActive: Date;
    photoUrl: String;
    city: string;
    country: string;
    interests?: string;
    introduction: string;
    lookingFor?: string;
    photos?: Photo[];
}