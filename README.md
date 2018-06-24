# GifTastic
Use the GIPHY API to make a dynamic web page that populates with gifs and call the GIPHY API, use JavaScript/jQuery to change the HTML

-   Create an array of strings
    -   Choose topics that interests you. 
    -   Save it to a variable called `topics`.
-   Take the topics in the array and create buttons in HTML
    -   Use a loop that appends a button for each string in the array
-   The user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and place them on 
    the page
-   The user clicks one of the still GIPHY images, the gif animate. 
    -   The user clicks the gif again, it stops playing.
-   Every gif will display its rating (PG, G, etc)
-   Create a form to the page that takes the value from a user input box 
    -   Add it into the `topics` array. 
    -   Then make a function call that takes each topic in the array remakes the buttons on the page.