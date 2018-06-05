const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject);
    localStorage.setItem(localStorageKey, stringifiedDatabase);
};

const loadDatabase = (localStorageKey) => {
    const databaseString = localStorage.getItem(localStorageKey);
    return JSON.parse(databaseString);
} 

let NssDatabase = loadDatabase("NssDb");

if(NssDatabase === null) {
    NssDatabase = {};
    NssDatabase.staff = [];
}


