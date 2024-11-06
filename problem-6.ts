
interface Profile {
    name: string;
    age: number;
    email: string;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

const updateProfile = (myProfile: Profile, changes: Partial<Profile>): Profile => {
    return { ...myProfile, ...changes };
};

// console.log(updateProfile(myProfile, { age: 26 }));