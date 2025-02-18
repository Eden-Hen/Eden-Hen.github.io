# My Website Code!

This branch includes the full website code, while the 'npm-pushes branch' is used to actually deploy the website.

Feel free to poke around here and see what's going on behind the scenes!

This website was designed with two main goals in mind:
(1) Have clean, organized, and readable code.
(2) Be easy to update and add new projects.

To that end, each individual project page is actually just a markdown file that is then rendered by the website (using the code located in the file MarkdownPage.tsx).

As a result, creating a new project takes only a few simple steps:
1. Creating a project folder in the pages directory
2. Creating a markdown file and adding relevant images/videos in the project folder
3. Adding a new entry into the projects dictionary in Projects.tsx

This makes this website very easy to use and keep up to date!