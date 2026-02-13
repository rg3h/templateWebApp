<!--_____________________________     _                       _       _
 / \                             \   | |_ ___ _ __ ___  _ __ | | __ _| |_ ___
|   |                            |   | __/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \
 \_ |                            |   | ||  __/ | | | | | |_) | | (_| | ||  __/
    |                            |    \__\___|_| |_| |_| .__/|_|\__,_|\__\___|
    |                            |                     |_|
    |                            |   HTML/CSS/JS project templateWebApp
    |  __________________________|__
    |  \                            \
    |  /                            /
    \_/____________________________/
-->
<img src="./public/assets/images/logo/logo.png" height="128" align="left" valign="top"
  alt="templateWebApp" />
<br>
<b>templateWebApp</b><br>
<sup><sub>
HTML/CSS/JS project templateWebApp
&nbsp;&nbsp;
<a href="https://rg3h.github.io/templateWebApp/index.html">
https://rg3h.github.io/templateWebApp</a>
</sub></sup>
<br>

TemplateWebApp provides a very basic skeleton structure for a web app that I can evolve over time.
It contains a directory structure, dev tool scripts, and a local node server.
<br><br>
I use this as a starting point for a new prototype or idea when I don't need a full-blown system.
It works well on your local machine with the included node server as well as for a new website or git/github project.

<h3>Directory Structure</h3>
<table><tr><td><pre>
  aaa_notForProject..............where non-essential files are kept
   notes.txt.....................notes on what I need to do with the project
   .gitignore....................example (installed globally so each project does not need one)
  public.........................the root of the web app
    assets
      fonts
        monaSans.................example -- a sans serif variable font and css file
      images
        logo
          logo.png...............logo for the project/website
    modules
      anim.......................animation css
      color......................color tools and css
      date.......................date tools
      default....................reset.css default.css main.js (app entry point)
      event......................wrapper to dispatch and handle custom events
      html.......................js to manipulate the DOM
      util.......................utility functions
      index.html.................main app page
      404.html...................on error this is shown
    tools........................development tools (lint, server, etc)
      runServer.bat..............simple bat command to run the local server
      server.....................simple node server supporting https for local testing
</pre></td></tr></table>

<h3>Installation and Use</h3>
<ol>
  <li>download the templateWebApp repository zip (under the github CODE button)</li>
  <li>(optional) install node if you want to run the provided local server</li>
  <li>run a local server such as: tools/runSimpleServer.bat</li>
  <li>open your browser to https://localhost:8000</li>
  <li>replace all occurances of "templateWebApp" with your project name</li>
  <li>consider using git/github and cloudflare to host your project (I have docs on how to do that)</li>
</ol>

<h3>TODOs, Nice-To-Haves, Future Work</h3>
<ul>
 <li>create additional, modular, useful template components:
   <ul>
     <li>a build script (node or sh)</li>
     <li>eslint, unit/integration testing, concat, tree-shaking</li>
     <li>logging, encryption, databases</li>
     <li>vanilla html, css, and js modules (e.g. date, dom, math, stats...)</li>
     <li>css module for handling mobile devices</li>
    </ul>
  </li>
  <li>add links and notes to related items (using git, creating a website on cloudflare...)</li>
</ul>
