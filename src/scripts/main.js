const jumpstopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createFunkArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}
const createRapArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}
const createCountryArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}
const createBluegrassArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}
const createPopArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}

const bruceAtikins = createCountryArtist("Bruce Atikins", "Country", 23);
const jensenBrown = createPopArtist("Jensen Brown", "Pop", 20);
const dreFunkz = createFunkArtist("Dre Funkz", "Funk", 25);
const dustaGrimes = createRapArtist("Dusta Grimes", "Rap", 21);
const bartholomewDanielson = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23);
const avileeDallas = createCountryArtist("Avilee Dallas", "Country", 19);
const austinKinkaid = createPopArtist("Austin Kinkaid", "Pop", 22);
const loyonceBranis = createRapArtist("Loyoncé Branis", "Rap", 27);

jumpstopRecords.push(dreFunkz, dustaGrimes, loyonceBranis);
chattenRecords.push(bruceAtikins, bartholomewDanielson, avileeDallas);
polarRecords.push(jensenBrown, austinKinkaid);