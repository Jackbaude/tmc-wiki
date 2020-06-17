# Technical Minecraft Wiki

The official wiki for technical minecraft. 

## Purpose
Our initiative for building a wiki for the community is to organize everyone's
knowledge into one place that is accessible and quick to reference. 

## Contribute

There are many ways that you can contribute to the project. The project is 
still getting off the ground, and we are looking for people to help fill 
posts on the wiki. The project as of right now is fairly simple, but as it 
goes on it could get more complicated, and we are looking for people to help 
use build. We take in pull requests because they help us merge and manage
multiple posts if more than one person is working on a file at once. This is how
we are getting the initiative off the ground, but as mentioned we are looking for 
help to build this up.


## Making posts

As of right now the way we are uploading posts to the site is by making pull 
requests to the wiki. If you would like to post, make a pull request with a 
markdown file `.md` to in the `/Posts` folder.

1. Copy and paste this into the markdown file, including the 3 dash marks on top 
   and bottom that you are PR. slug and path are the url to the post, they must be the same and must be 
   **all lower case**, **URL safe** - stick with hyphens and alphanumerics.
```
---
slug: "/posts/post-url"
path: "/posts/post-url
date: "YYYY-MM-DD"
title: "TITLE"
tags: foo, bar
---
# Markdown post goes here.

```
2. Once you have added the top part to the markdown `.md` file, start writing!
3. **Important:** Please separate any information that is difference among versions 
with a header. 
3. Make a [pull request](https://github.com/Jackbaude/tmc-wiki/compare) and wait 
    for it to be merged!

## For developers
Want to contribute to the code base? Here's how. 

1. Fork the Repo
2. Run `npm install` in the root directory of your fork. 
3. Start coding!

Some things you might want to know:

* We are using a framework called [gatsby](https://www.gatsbyjs.org/). We 
may sometime in the near future move away from this, but it is currently what we use.

* Any questions please contact jackbaude@gmail.com, or friend me on discord `Jakku#1123`.


# License
A short and simple permissive license with conditions only requiring 
preservation of copyright and license notices. Licensed works, modifications, 
and larger works may be distributed under different terms and without source 
code.


MIT © Jack Baude 