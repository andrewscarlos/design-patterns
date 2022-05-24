export class Singleton {
    private static _instnace: Singleton | null = null;

    private constructor() {
        
    }

    static get instace(): Singleton {
        if (Singleton._instnace === null) {
            Singleton._instnace = new Singleton();
        }
        return Singleton._instnace;
    }
}