{
    type Person = { name: string, age: number, email: string };
    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {

        return keys.every((key) => key in obj);
    };

    console.log(validateKeys(person, ["name", "age"]));

}