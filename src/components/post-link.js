import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="post-link-container">
    <Link className="post-link" to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>

    <p className="post-link-date">{post.frontmatter.date}</p>
    <p className="post-link-tags">{post.frontmatter.tags}</p>
  </div>
)

export default PostLink
