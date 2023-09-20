
![Screen Shot 2023-09-20 at 21 56 21](https://github.com/juliadavydenko/the-perfect-uni/assets/98152890/6b072e1b-ee6e-439f-86c9-8c326b57c44e)

## General Information
This is NextJS project made with Javascript and TailwindCSS.
It is aimed to connect people with the universities they are dreaming of.
Users can search for universities by name and by country.
The results include a list of filtered universities, where the name, the country, the country code and the webpage of uni are displayed.
User can click on the link and they will be redirected to the university page. 

In this project I used NextJS13 App Router(instead of the older Pages option).
I also used TailwindCSS to provide styling. 

This is a simple app that has only 2 pages:
-Main page where the user can search for the universities and see the results
-And the http://localhost:3000/universities page, where they can see list of all available universities.


## How to run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. On the http://localhost:3000/universities page you can see list of all available universities.
I intentionally limited the displayed list to 100 in this project for better performance and resource management as there is currently no proper pagination implemented.



## Main page

![Screen Shot 2023-09-20 at 21 40 06](https://github.com/juliadavydenko/the-perfect-uni/assets/98152890/f712796e-40ed-4045-ab4d-f1d930ecb396)

The project has a Main Page, http://localhost:3000/ 
It consists of several sections. 
On the top you can see a Navbar. Then there is a Search Form with a short title, kind of "Call to Action". And down below there is a section with list of explanations about why choosing university is important. I think sections with explanations or blog posts are also very important part of the web page as they can bring more traffic if SEO is done correctly.  
As for search -there is an option for users to search for universities by name and by country. The results include a list of filtered universities, where the name, the country, the country code and the webpage of uni are displayed in a form of a card. Search is implemented in a Search component and I used useState hook to manage the input values, search results, and whether to show a message when no matching universities are found.
Users can click on the University name and the university webpage will be opened in a new tab. If there are no matching results - the user will get a corresponding message: “No matching universities found. Please check your input.” This message is only displayed when two conditions are met: 1. User has submitted the form and 2. There are no matching results. 

## All Universities Page

![Screen Shot 2023-09-20 at 21 29 45](https://github.com/juliadavydenko/the-perfect-uni/assets/98152890/6b2d1512-a758-426a-9428-9fcc67c380ea)


Here users can see the list of all universities displayed in the form of small cards using Tailwind classes. 
The difference between representing results here and on the Main page is that here the universities' websites are showed separately in the dedicated place. You can reach this page either by typing in the browser or via Link in the Navbar.(“All Universities”)
As implemented in NextJS13 file-system-based router, where folders are used to define routes, the code for the http://localhost:3000/universities is represented in the file page.jsx in the app/universities folder. Here I import GetUnis (server-side utility function), placed in the libs folder for the better structure and where I fetch the data and limit the amount of the results for better performance.Then, inside page.jsx I use JS map function to iterate through an array of university objects. Before mapping, it creates a sorted copy of the unis array based on the name property of each university. This sorting is done using the localeCompare method, which ensures proper sorting. Inside the map function, for each university (uni), it creates a div element with Tailwind classes.

## Navbar

![Screen Shot 2023-09-20 at 21 34 41](https://github.com/juliadavydenko/the-perfect-uni/assets/98152890/ec247765-bd6a-43fa-9759-9ae6a4e1c5d2)

There is also Navigation Bar which is displayed on all pages of the app. It has small logo, name and two links - to the Main page and to the List of all universities.

## More


