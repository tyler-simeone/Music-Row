const jumpstopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createArtist = (name, genre, age) => {
    return {
        "Artist": name,
        "Genre": genre,
        "Age": age
    }
}

const bruceAtikins = createArtist("Bruce Atikins", "Country", 23);
const jensenBrown = createArtist("Jensen Brown", "Pop", 20);
const dreFunkz = createArtist("Dre Funkz", "Funk", 25);
const dustaGrimes = createArtist("Dusta Grimes", "Rap", 21);
const bartholomewDanielson = createArtist("Bartholomew Danielson", "Bluegrass", 23);
const avileeDallas = createArtist("Avilee Dallas", "Country", 19);
const austinKinkaid = createArtist("Austin Kinkaid", "Pop", 22);
const loyonceBranis = createArtist("Loyoncé Branis", "Rap", 27);

jumpstopRecords.push(dreFunkz, dustaGrimes, loyonceBranis);
chattenRecords.push(bruceAtikins, bartholomewDanielson, avileeDallas);
polarRecords.push(jensenBrown, austinKinkaid);