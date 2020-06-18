import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

export default class Search extends Component {
  state = {
    query: ``,
    results: []
 }
  newResults(){

  }
  render() {
    return (
      <div>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.query} onChange={this.search} />
          <div>
            <ul className="_popover list-group list-group-flush">
              {this.state.results.map(page => (
                <li className="list-group-item" key={page.id}>
                  <Link to={"/" + page.path}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
    )
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)
  }

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => {
          return this.index.documentStore.getDoc(ref)
        }),
    })
  }
}
