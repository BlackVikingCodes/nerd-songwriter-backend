# Nerd Songwriter

This is a full-stack app designed for creativity.

An excellent tool for musicians, songwriters, composers, and anyone interested in writing songs and having a place to keep them stored, whilst getting words and chords recommendations to make it a hit.

**Live site URL:**  

![App Screenshot](./screenshot.png)

## Why Was This App Made

Some of the biggest challenges for anyone writing a song are finding the exact word, the precise rhyme, the proper inspiration; or, even, the best chord to complete your harmonic progression.

The best songwriters understand the power of being sensible enough to portray your songs with the best possible words you can. Legendary composers like Paul SImon, Neil Young, Bob Dylan, etc. can attest to the importance of prosody and consistency in songwriting. This app is meant to be a tool to inspire songwriters to write more, and to write better.

The search of the "Lost Chord" has been a musical endeavour from time immemorial. From Keith Richards to The Moody Blues and beyond, every musician knows that the right chord at the right moment can touch the listener.

## What Does This App Do?

This app is based on 4 important components that can explain its functionality:

1. **Authorization.**
   
   This means your ideas are yours. This is not meant to be a social network, but a place to sow and reap intimacy with your own creativity. 

2. **CRUD app.**
   
   CRUD stands for Create, Read, Update, and Delete. This means you can manipulate your lyrics as you please and manage your content to your own will. Every song you write and every modification you make persists in the database; every song you delete is deleted permanently too. 

3. **Words Recommendation.**
   
   Using [Datamuse's API](https://www.datamuse.com), you can access namely infinite word recommendations based on your particular demands. You can type any word and receive endless results to meet your request. 
   
   That means you can ask for any word that:
   
   - Rhymes with
   
   - Is related to
   
   - Is a synonym to
   
   - Is an antonym to
   
   - Is an adjective to describe
   
   - Is a noun associated with
   
   - Is a homophone of
   
   - Sounds like
   
   any word you type in.

4. **Chords Recommendation.**
   
   Using [Hooktheory's API](https://www.hooktheory.com), this app helps you with two different characteristics for your harmonic progression:
   
   1. You receive the best chord recommendations to follow your current chord based on an enormous amount of data and investigation on the world's biggest hits. But not only does it provide you with the best chords to follow your harmony, it also tells you the probability of each one sounding amazing.
   
   2. You can type in your current chord progression and get, in return, what other hits have used that exact progression and in what section of the song, plus a link to that song's page on Hooktheory's website for a more in-depth analisys.

## How It Was Made

**Tech used:**  JavaScript, React JS, Custom Hooks, Custom Contexts and Reducers on ReactJS, React-Router, API requests, MVC, CRUD functionality, NodeJS, ExpressJS, MongoDB, MongooseJS, JWT auth, Browser's LocalStorage, and many more.

This app is conceived to easily provide the user with words and chords inspiration on top of the ability to write and store song lyrics.

#### Frontend

**JavaScript/React JS:**

This app was based on the create-react-app npm package's folder structure. Every component is a function-based component.

The frontend functionality of this application has a great deal of custom-made script. Starting with custom hooks made to handle the signup, login, logout and overall authentication verification behaviour; just as important, some of those custom hooks were made to handle the different contexts taking place in this program.

Regarding said contexts, the diferent pieces of data being accessed to and from the database, the songs themselves being handled throughout every appropriate component, and the authentication status of the user designed to ensure exclusive access to each individual's content; were done using React's useContext hook and, in most cases, useReducer too to handle complex stateful matrixes.

Finally, answering to one of the challenges to create a full-stack application using both React and an authentication method, the verification method of choice was JWT. This method presents itself as a capable (and therefore popular) option by being able to be stored as a token using the browser's Local Storage API and being persistent unrestrictive of ReactJS's re-rendering and reactful nature. 

#### Backend

**NodeJS/ExpressJS:**

By using ExpressJS, this application was done in a very efficient and streamlined way. Following the MVC principles, the backend of this application presents a REST API capable of CRUD operations and delivering a storage application hosted on the cloud thanks to Mongo Atlas, via MongooseDB.

## Optimizations

- Added authorization functionality to have each user access their own individual songs.

- Added the ability to modify existent songs instead of having to delete them and create a new one.

## Future Updates

- The user will have the ability to sort existing songs in any particular order in future revisions.

- The user will have the ability to write their lyrics using a rich-text editor in future revisions.

- The user will have the ability to use "tags" to mark their songs and sort them out using this parameter in future revisions.

- The user will have theability to search and filter through the songs list in future revisions.

## Lessons Learned

- As software engineers, we have to stay up to date on the different tools and methods we use to make our ideas a reality. Making sure to be using sustainable and durable systems to build the web should be a priority for us all.

- API functionality is deeply interesting and sometimes overlooked. As a developer constantly working towards improving and making impactful products, it's worth it to learn more about them and incorporate them into regular use.

- Modern-day Software Engineers are standing on the shoulders of giants. We have multiple pre-built tools that are effective and allow us to make our work more precise and efficient. Rather than considering using pre-built tools 'cheating', not having to re-invent the wheel every time makes it possible for us to focus on really advancing the end-line on our current knowledge and possibilities. Being the user the ultimate benefactor of such advancements, it's worth it to check out how we can incorporate pre-built tools into our projects, making the tech space a more solid, collaborative community towards a common goal. 

- Tools that make the user's workflow easier/better can ultimately improve their lives. Apps such as this, as small as they may seem, can still be impactful and that's a responsibility we, as Software Engineers, cannot overlook.