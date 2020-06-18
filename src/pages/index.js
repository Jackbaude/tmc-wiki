
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
 <Layout>
   <SEO title="Home" />
   <div
   style={{
     margin: `1000 auto`,
     maxWidth: 1000,
     padding: `0 1.0875rem 1.45rem`,
   }}>
   <h1 id="technical-minecraft-wiki">Technical Minecraft Wiki</h1>
   <hr className="dividing-line"/>
   <p>The official wiki for technical minecraft.</p>
   <h2 id="purpose">Purpose</h2>
   <hr className="dividing-line"/>
   <p>Our initiative for building a wiki for the community is to organize everyone's knowledge into one place that is accessible and quick to reference.</p>
   <h2 id="contribute">Contribute</h2>
   <hr className="dividing-line"/>
   <p>There are many ways that you can contribute to the project. The project is still getting off the ground, and we are looking for people to help fill posts on the wiki. The project as of right now is fairly simple, but as it goes on it could get more complicated, and we are looking for people to help use build. We take in pull requests because they help us merge and manage multiple posts if more than one person is working on a file at once. This is how we are getting the initiative off the ground, but as mentioned we are looking for help to build this up.</p>
   <h2 id="making-posts">Making posts</h2>
   <hr className="dividing-line"/>
   <p>As of right now the way we are uploading posts to the site is by making pull requests to the wiki. If you would like to post, make a pull request with a markdown file <code>.md</code> to in the <code>/Posts</code> folder.</p>
   <ul>
     <p>1. Copy and paste this into the markdown file, including the 3 dash marks on top and bottom that you are PR. slug and path are the url to the post, they must be the same and must be <strong>all lower case</strong>, <strong>URL safe</strong> - stick with hyphens and alphanumerics. </p>
    <div className="code-block">
     <p><code>---</code></p>
     <p><code>slug: &quot;/posts/post-url&quot;</code></p>
     <p><code>date: &quot;YYYY-MM-DD&quot;</code></p>
     <p><code>path: &quot;/posts/post-url</code></p>
     <p><code>title: &quot;TITLE&quot;</code></p>
     <p><code>tags: foo, bar</code></p>
     <p><code>---</code></p>

    <p># Markdown post goes here.</p>
    </div>

   <p> 2. Once you have added the top part to the markdown<code>.md </code> file, start writing!</p>
   <p> 3. <strong>Important:</strong> Please separate any information that is difference among versions with a header. </p>
   <p>4. Make a <a href="https://github.com/Jackbaude/tmc-wiki/compare">pull request</a> and wait for it to be merged!</p>
   </ul>
   <h2 id="for-developers">For developers</h2>
   <hr className="dividing-line"/>
   <p>Want to contribute to the code base? Here's how.</p>
   <ul>
   <li>Fork the Repo</li>
   <li>Run <code>npm install</code> in the root directory of your fork.</li>
   <li>Start coding!</li>
   </ul>
   <p>Some things you might want to know:</p>
   <ul>
   <li><p>We are using a framework called <a href="https://www.gatsbyjs.org/">gatsby</a>. We may sometime in the near future move away from this, but it is currently what we use.</p></li>
   <li><p>Any questions please contact jackbaude@gmail.com, or friend me on discord <code>Jakku#1123</code>.</p></li>
   </ul>
   <h1 id="license">License</h1>
   <hr className="dividing-line"/>
   <p>A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.</p>
   <p>MIT © Jack Baude</p>

   </div>

 </Layout>
)

export default IndexPage
