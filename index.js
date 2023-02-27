/*  Question 1
Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 
*/

function Instagram(handleOfAuthor, content, image, numberofViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.image = image;
    this.numberofViews = numberofViews;
    this.numberOfLikes = numberOfLikes;
}

/* Question 2
 Create 2 Instagram post objects from the constructor function you created above
*/

const post1 = new Instagram("Danny Junior", "This is my Page","image1","15,000,456 views", "60,000 likes");
const post2 = new Instagram("Abdullahi faula", "This is my Second Page", "image2","134,000 views", "6000 likes");

console.log(post1);
console.log(post2);

/* Question 3a
Musa Dawodu is a 19 years old Nigerian male who lives with his 
parents in Lekki, Lagos State. Recently, he wrote the JAMB exam 
and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

Using the factory method, implement a createPerson() factory function 
that takes name, age and location as arguments. Afterwards, 
create an object representing Musa from the factory function. 
*/

function createPerson(name, age, location){
    return {
        name: name,
        age: age,
        location: location,
        }
};


const musa = createPerson("Musa Dawodu", 19, "Lekki, lagos state");
console.log(musa);


/* Question 3b
Also, implement a factory function createJambScores() that takes eng, govt, 
lit, crk as arguments. Then create an object representing Muse’s 
JAMB scores. Add the object as a property to Musa object you created 
above in (a) above
*/

function jambScores(eng, govt, lit, crk){
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
};
musa.scores = jambScores(70, 85, 82, 94);
console.log(musa);


/* Question 4
What are the different ways you can clone an object? 
Give examples for each of them.
*/

//Using Object.assign

const firstBook = {
    author: "Chimamanda Adichie",
    title: "Half of a Yellow Sun",
    yearPublished: 2008,
};
  
const secondBook = Object.assign({}, firstBook);
console.log(firstBook);

//Using spread syntax

const thirdBook = { ...firstBook };
thirdBook.title = "Americanah";
console.log({ thirdBook });

//Using the method JSON.parse(JSON.stringify())
// JSON - JavaScript Object Notation
const fourthBook = JSON.parse;
fourthBook.title = "Notes on Grief";
console.log({ fourthBook });


/* Question 5
As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}


Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’

*/

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};

for (const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + key);
}
