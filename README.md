# Walkthrough Wednesdays with Jason Lengstorf: DEV API project using serverless

We talked Jamstack, serverless, and I got to have some fun and pair with Jason. We used Netlify's serverless functions to quickly set up an API to grab DEV posts with the DEV API, i.e. this repository. 😎

Thanks again for coming on the stream Jason! 😎

<p align="center">
    <a href="https://www.youtube.com/watch?v=dXr0iJE10tQ">
        <img src="https://img.youtube.com/vi/dXr0iJE10tQ/0.jpg" alt="Walkthrough Wednesdays Project with Jason Lengstorf"/>
    </a>
</p>

## Installation

* Install the Netlify CLI, `npm install netlify-cli -g`
* Run `npm install`
* Run `ntl dev`
* A browser will open at http://localhost:8888 with a message saying "Not Found". That's OK. 😎
* Navigate to http://localhost:8888/api/posts. A list of posts from DEV will load.

## Play with the API

* Load posts for a specific user by adding their username to the API call, e.g. http://localhost:8888/api/posts/nickytonline
* Fork this and have some fun!

## Links

Deployed Application: https://pensive-raman-d0b535.netlify.app/api/posts/

Links from the stream:

* [GitHub CLI](https://github.com/cli/cli#installation)
* [Netlify CLI](https://docs.netlify.com/cli/get-started)
* [Netlify On-demand builders](https://docs.netlify.com/configure-builds/on-demand-builders)
* [Explore the dev.to API](https://docs.forem.com/api)
* [Jamstack Explorers](https://explorers.netlify.com)
