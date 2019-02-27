class Song{
}

Song.prototype.verse = function(numVerse){
    var sentence = "";
    sentence += "I know an old lady who swallowed a " + songMap[numVerse].animal + ".";
    sentence += "\n";
    sentence += songMap[numVerse]["sentence"];
    //sentence += "\n";
    if(numVerse > 1 && numVerse < 8){
        sentence += "\n";
        for(let i = numVerse; i > 1; i--){
            if(i != 3)
                sentence += "She swallowed the " + songMap[i].animal + " to catch the " + songMap[i-1].animal + ".\n";
            else if(i == 3)
                sentence += "She swallowed the " + songMap[i].animal + " to catch the " + songMap[i-1].animal + " that wriggled and jiggled and tickled inside her.\n";
        }
    }
    if(!songMap[numVerse].ending)
        sentence += "I don't know why she swallowed the fly. Perhaps she'll die."
    sentence += "\n";
    return sentence;
}

Song.prototype.verses = function(numStart, numEnd){
    var sentence = "";
    for(let i = numStart; i <= numEnd; i++){
        sentence += this.verse(i);
        sentence += "\n";
    }
    return sentence;
}

const songMap = {
    1: {
        ending: false,
        sentence: "",
        animal: "fly"
    },
    2: {
        ending: false,
        sentence: "It wriggled and jiggled and tickled inside her.",        
        animal: "spider"
    },
    3: {
        ending: false,
        sentence: "How absurd to swallow a bird!",
        animal: "bird"
    },
    4: {
        ending: false,
        sentence: "Imagine that, to swallow a cat!",
        animal: "cat"
    },
    5: {
        ending: false,
        sentence: "What a hog, to swallow a dog!",
        animal: "dog"
    },
    6: {
        ending: false,
        sentence: "Just opened her throat and swallowed a goat!",
        animal: "goat"
    },
    7: {
        ending: false,
        sentence: "I don't know how she swallowed a cow!",
        animal: "cow"
    },
    8: {
        ending: true,
        sentence: "She's dead, of course!",
        animal: "horse"
    }
}

module.exports = {
    Song
};