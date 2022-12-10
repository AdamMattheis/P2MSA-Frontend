Milestone 2 Project - MERN Stack Application

**RATED**

## Description
Our app is a rating website for movies, tv shows, and videogames where you can add comments to each one.
You can also add a movie, tv show, and videogame and edit them.
Each of these are updated to the SQL database.
This app is an react app.

## Installation
To use this app, you will need to have Node.js and npm installed on your computer. You can download and install them from the Node.js website.

Once you have Node.js and npm installed, clone or download the source code from this repository and navigate to the directory where you downloaded the code. Then run the following command to install the necessary dependencies:

npm install

To run the app, in your terminal run the code:

npm start

## Homepage
On the Homepage, you can navigate to either the movies, tv shows, or video games page. You can also click the title 'RATED' to refresh the page

## Movies, Tv Shows, Video games Page
After clicking on one of the three options on the homepage, you are redirected to the homepage of the option you clicked on. This page shows the current list of items that are in the database and the details of each item are shown. You can click the 'add' button to add an item to the database. You can also click on the title of an item and it will redirect you to the details page of that item.

## Details Page
The details page for an item shows the data associated with that item and it also has an 'edit' and 'delete' button which redirects you to the edit page or delete the item from the database, respectively. You can add a comment and star rating to the item and it also shows the comments and star ratings already made for that specific item, which can also be deleted. This deletes them from the database

## Edit Page
The edit page is where you can edit the data of an item and update the database after it is submitted.

## Comments
Comments and star ratings are made on the Details Page of an item and are updated or deleted from the database.


## Known Issues
Comments are populated to the details page when created and are also added to the database, but if the ID of the comment is a different number than the item ID, it won't remain populated on the details page when it is refreshed.

The background color changing sometimes get out of sync between divs and the page needs to be refreshed to start on the same color again to appear uniform.

## Things to Add
We could add a search bar to be able to search for a specific item on the main homepage. It could also have a drop down selection to choose which catagory you want to search.

We could also use an external API to utilize a vast database of items.


## ERD Image
![ERD image](/images/PMSA2erd.png)
