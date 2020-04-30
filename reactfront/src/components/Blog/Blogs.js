import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getBlogs, deleteBlogs} from '../../action/BlogsAdmin'
export class Blogs extends Component {
  static propTypes = {
    Blogs:PropTypes.array.isRequired,
    getBlogs:PropTypes.func.isRequired,
    deleteBlogs:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getBlogs()
  }

  render() {
    return (
      <div>
        { this.props.Blogs.map(blog => (
            <div key={blog.id}>
              <p>{blog.title}</p>
              <p>{blog.description}</p>
              <button onClick={this.props.deleteBlogs.bind(this,blog.id)}>Sil</button>
            </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state =>({
  Blogs:state.Blogs.blogs
})
export default connect(mapStateToProps, {getBlogs, deleteBlogs})(Blogs)