# Project_2

**_jobBook_**

-   READ ME
-   Project 2
-   JobBook
-   Version: 1.0.0
-   Web Design By Brittany Clark, Clint Gordy, and Tripp Parham
-   Published: Saturday February 29th 2020

**_About Job Book_**

-   The Job Book is a place where software developer can easily find and apply for exciting new jobs. Users must sign in to the site to uses. Once logged in, users can enter a job keyword and location to find all of the software jobs in the area selected. For busy developers, job searches ands listing can be saved for later review.

**_Configuration instructions_**

-   No configuration necessory. Works on muost mainstream browsers.
-   To find new and exciting opportunities, visit the following link to experience the Job Book:

https://jobbook.herokuapp.com

**_Installation instructions_**

-   To run locally, download files from repository to a folder on your computer from:

https://github.com/bclark07/Project_2

-   This program requires node and a connection to a MySQL database.
-   From the parent directory type node server.js and hit enter.
-   The program will start.
-   Using a main stream browser, visit localhost:8080.

**_Operating instructions_**

-   User must login, or signup if a new user. An email address and password will be required to signup.
-   The Job Book home page will appear.
-   Enter a search keywork and location. Then click Search Jobs. Cick Save Search to store the search in the database.
-   Jobs that meet the search criteria will be presented in the Current Job Listings. The number of results returned appear at the top of the list. The user can click the Save button next to the listing to save. Manyjobs will also offer employeer contact information as well as a link to apply for the job.
-   The user can visit saved listing by clicking the saved listing button in the navigation bar. The user can click Home in the navigation bar to return to the home page.
-   User can click Job Books social media links at the bottom of the page for additional resources to aid in the job search.
-   The user can click the logout button in the nav bar to sign out.

**_List of files included in the following structure_**

-   config folder
    -   config.json
    -   middleware folder
        -   isAuthenticated.js
    -   passport.js
-   db folder
    -   schema.sql
    -   seeds.sql
-   models folder
    -   index.js
    -   listings.js
    -   search.js
    -   user.js
-   public

    -   img folder
        -   datacenter.jpg
        -   doors.jpg
        -   fingerTips.jpg
        -   jumping.jpg
    -   js folder
        -   login.js
        -   members.js
        -   search.js
        -   signup.js
    -   login.html
    -   members.html
    -   signup.html
    -   stylesheets folder
        -   style.css
    -   routes folder
        -   html-routes.js
        -   search-api-routes.js
        -   user-api-routes.js
    -   views folder
        -   index.handlebars
        -   layouts folder
            -   main.handlebars

-   server.js
-   README.md
-   FORME.md (Development use only)
-   package-lock.json
-   package.json

**_Copyright and licensing information_**

-   The slider photos are from: https://pixabay.com

-   Simplified Pixabay License

-   Our license empowers creators and protects our community. We want to keep it as simple as possible. Here is an overview of what Pixabay content can and can't be used for.

-   What is allowed?

    -   All content on Pixabay can be used for free for commercial and noncommercial use across print and digital, except in the cases mentioned in "What is not allowed".
    -   Attribution is not required. Giving credit to the contributor or Pixabay is not necessary but is always appreciated by our community.
    -   You can make modifications to content from Pixabay.

-   What is not allowed? This section only applies to image users and not to the appropriate image authors.

    -   Don't redistribute or sell someone else's Pixabay images or videos on other stock or wallpaper platforms.
    -   Don't sell unaltered copies of an image. e.g. sell an exact copy of a stock photo as a poster, print or on a physical product.
    -   Don't portray identifiable people in a bad light or in a way that is offensive.
    -   Don't use images with identifiable brands to create a misleading association with a product or service.

**_Contact information for the distributor or programmer_**

Contact: Tripp Parham Email: tripp.parham@gmail.com

**_Known bugs[0]_**

-   Clicking the home button does not return user to home page
-   Saved Listing?
-   Save Search?

**_Troubleshooting[0]_**

-   New users can successfuilly sign up for Job Book access.
-   Registered users can succesfully login to Job Book.
-   The home page correctly loads.
-   After entering a keyword, location and clicking SEARCH JOBS, the appropriate job listings appear in the Current Job List.
-   The total number of jobs returned appears correctly next to Search Results at the top of the current jobs list.
-   Clicking the home button does not return user to home page
-   Clicking logout correctly logs out and returns user to the login page.

**_Credits and acknowledgments_**

Special thanks to the Instructors and Staff at the UNC Coding Bootcamp. They are an awesome team.:-)

**_Change Log_**

**_Site Updates_**

-   Version 1.0.0 Released Saturday February 29th, 2020

**_Features Currently in Development_**

-   Feature to add geotag to show local jobs
-   Feature that will build a github profile for the user
-   Feature that will add job hunting tips
-   Feature that will connect users with recruiters for professional job search assistance.
-   Feature that will allow users to store their github profile or resume on the Job Board to make applying for jobs a breeze..
-   Feature a blog for users to share job hunting experiences
