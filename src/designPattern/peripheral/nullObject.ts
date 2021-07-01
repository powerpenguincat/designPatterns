export interface Animal {
    sound(): string | null;
}

class Dog implements Animal {
    sound = (): string | null => "bark";
}

class NullAnimal implements Animal {
    sound = (): string | null => null;
}

export const getAnimal = (type: string | null): Animal => type === "dog" ? new Dog() : new NullAnimal();
