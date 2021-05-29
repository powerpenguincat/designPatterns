export interface Animal {
    sound(): string;
}

class Dog implements Animal {
    sound = (): string => 'bark';
}

class NullAnimal implements Animal {
    sound = (): string => null;
}

export const getAnimal = (type: string): Animal => {
    return type === 'dog' ? new Dog() : new NullAnimal();
};
