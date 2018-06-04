# User Interface Project Week
You are to treat this week as if you are working as a front end developer at a web development agency. The instructor is the owner of the agency and is under pressure from the client to deliver the MVP on time. The project managers are acting as your supervisors.  You will use Trello to report your progress on the MVP and any extra features you accomplish to your project managers every day during standup. This project is meant to be worked on by yourself.  Do not pair program this week as this challenge is meant to show you where you can improve and what you have learned on your own.

This week you will be building a website with for an architectural firm named Smith and Jones Architects.  Smith and Jones have requested a minimum viable product to deliver to their board of directors by the end of the week.  The requirements are listed below under "MVP" Features.  Smith and Jones also have a wish list of features they would love to showcase to the board if you can get them done.  You will demo your work to the agency owner Thursday afternoon.  

Do not work on any extra features until you have checked off your MVP completion with your project manager.  Try to impress the client and your boss by getting to as many extra feature as you can by Thursday afternoon of this week.

## Pro Tips For This Week:
- Use past solutions from the previous weeks to accomplish harder tasks
- Commit every time you accomplish any new functionality or layout. Get in the habit of frequent commits so you have a record of your work.  Make a pull request every day to showcase your progress to your PM.
- After 20 minutes of being stuck on something, reach out to your PM!
- Don't overplan, start coding as soon as you can and adjust accordingly.  Trello is there as a guide not as a distraction.

## Trello Set Up:
* [ ] Create a [Trello account](https://trello.com/)
* [ ] Create a new public board called "S&J Architects - By Your Name"
* [ ] Create lists titled ```backlog```,```To Do```, ```In Progress```, and ```Done```.
* [ ] Fill in the ```To Do``` list with the MVP features listed below
* [ ] Fill in the ```backlog``` list with all the extra features listed below
* [ ] Share your board with the Project Manager that has been assigned to you.  If you have not been assigned yet, reach out to your lead TA for guidance.

## Assets Provided:
* [Style guide:](/DesignFiles/style-guide.md) This file will help you identify font sizes, colors, and font families across the site.
* [Images for both desktop and mobile](/img).  Mobile images have been provided to match the design files.
* Content has been provided on each page inside of comment tags
* [Design Files](/DesignFiles) have been provided as guides for what the pages should look like on desktop and mobile.  Ignore tablet until you get MVP done.

## MVP Features:
* [ ] Build the Home, Services and Contact Us pages to [match provided design files](/DesignFiles) for desktop and mobile views.  You can use bootstrap and/or custom CSS (LESS) for layout.  You have been provided all the content and necessary images for each view.  Notice the home page is called `index.html`.  Don't worry about a tablet view for MVP.
* [ ] [Services page](/DesignFiles/Services): You must build the tab navigator using your own custom JavaScript components, no libraries allowed on this feature. You are encouraged to use code from previous weeks to accomplish this feature.
* [ ] [Navigation System Part 1](/DesignFiles/Navigation/onScroll): When the user starts to scroll, the navigation bar should go from a transparent background to a 95% opacity background using `#9DA7B1` as your background color.  You can accomplish this anyway you want.  Use the design file named "Navigation-Scrolled" for an exmpale.
* [ ] [Navigation System Part 2](/DesignFiles/Navigation/expanded): When a user clicks on the navigation icon a full page overlay will pop over all the content on the page. The navigation icon will be replaced by a close icon.  The user must click the close icon to return back to browsing the website.  The home, services, and contact pages need to be linked together using `<a></a>` tags.  All design files have been provided for you. You must use your own custom JavaScript for the opening and closing functionality, no bootstrap allowed for functionality on this feature.
* [ ] LESS preprocessing must be used for all styling, use LESS imports to create a single index.less file that combines smaller .less files together.

Once you have accomplished the required MVP features, reach out to your project manager for approval to work on extra features of your choice.  This project does not end at MVP.  Try to get as many extra features in as you can before the demo.

Extra features are not in order of importance, it's just a list of features the client wishes they could have by the demo.  Pick in any order you wish.

## Extra Features:
* Make tablet look good if you haven't already
* Create 2 more pages named "About Us" and "Projects".  Be creative on what kind of content you would put in there but match the heading layout of the services/contact us pages.  Be sure to add the new pages to the menu system as well.  Ideas for creativity: create a carousel showcasing all of the projects.  Use [pexel.com](https://www.pexels.com/) to get free images to create custom content around an architecture/building theme.  For the about us page, you could make a list of employees that work there and showcase credentials.  Make heavy use of lorem ipsum, don't waste time on content creativity at this point.
* Use [Greensock](https://greensock.com/gsap) to add animation to the menu system when it opens and closes
* Build a custom carousel with your own components and use it throughout different pages on the site.
* Take a look at [Vue.js](https://vuejs.org/v2/guide/) and see if you could implement some simple JavaScript examples in your site from their tutorials.  
* If you have experience with [React](https://reactjs.org/tutorial/tutorial.html), see if you could convert the site into a single page app instead of a multipage app by creating routes and components.
* Incorporate animations on scroll events so that when users scroll through the site, content animates in or out of view.
* Host your site on a domain you own

Remember: This is a self driven challenge, try to accomplish MVP as soon as you can and stretch as much as you can on extra features.  Have fun with this and remember to reach out to your project managers after the 20 minute rule.  Good luck!