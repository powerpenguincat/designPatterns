class Dog {
    sound = (): string => 'bark';
}

class NullAnimal {
    sound = (): string => null;
}

export const getAnimal = (type) => {
    return type === 'dog' ? new Dog() : new NullAnimal();
};
