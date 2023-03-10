const User = require('./User');
const Card = require('./Card');
const Keyword = require('./Keyword');
const Meaning = require('./Meaning');
const Image = require('./Image');
const Reading = require('./Reading');
const Deck = require('./Deck');
const Theme = require('./Theme');
const Position = require('./Position');
const Person = require('./Person');
const PersonInReading = require('./PersonInReading');

Card.hasMany(Keyword);
Keyword.belongsTo(Card);

User.hasMany(Keyword);
Keyword.belongsTo(User);

Card.hasMany(Meaning);
Meaning.belongsTo(Card);

User.hasMany(Meaning);
Meaning.belongsTo(User);

User.hasMany(Deck);
Deck.belongsTo(User);

Deck.hasMany(Image);
Image.belongsTo(Deck, {
    onDelete:"cascade"
});

Deck.hasMany(Reading);
Reading.belongsTo(Deck);

Image.belongsTo(Card);
Card.hasMany(Image);

module.exports = {
    User,
    Card,
    Keyword,
    Meaning,
    Image,
    Reading,
    Deck,
    Theme,
    Position,
    Person,
    PersonInReading
};