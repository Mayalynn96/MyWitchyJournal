const User = require('./User');
const Card = require('./Card');
const Keyword = require('./Keyword');
const Image = require('./Image');
const Reading = require('./Reading');
const Deck = require('./Deck');
const Theme = require('./Theme');
const Position = require('./Position');
const Person = require('./Person');
const PersonInReading = require('./PersonInReading');

Card.hasMany(Keyword);
Keyword.belongsTo(Card);

User.hasMany(Deck);
Deck.belongsTo(User);

Deck.hasMany(Image);
Image.belongsTo(Deck, {
    onDelete:"cascade"
});

Image.belongsTo(Card);
Card.hasMany(Image);
Card.hasMany(Position)

Reading.belongsTo(User);
Reading.hasMany(Position)
Position.belongsTo(Reading, {
    onDelete:"cascade"
})
Position.belongsTo(Card)
User.hasMany(Reading);


module.exports = {
    User,
    Card,
    Keyword,
    Image,
    Reading,
    Deck,
    Theme,
    Position,
    Person,
    PersonInReading
};