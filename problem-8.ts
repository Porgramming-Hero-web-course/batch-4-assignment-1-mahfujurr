{
    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    const validateKeys = <X, Y extends keyof X>(obj: X, prop: Y): X[Y] => {

        return obj[prop];
    };

    console.log(validateKeys(person, ["name", "age"]));

}