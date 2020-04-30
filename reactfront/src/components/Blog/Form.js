import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addBlogs} from '../../action/BlogsAdmin'
export class Form extends Component {
  state = {
    title:'',
    slug:'',
    description:''

  }
   static propTypes = {
    addBlogs:PropTypes.func.isRequired
  }
  onChange = e => this.setState({
      [e.target.name]: e.target.value
    })
onSubmit = e =>{
    e.preventDefault()
    const {title,slug,description} = this.state
    const blogs = {title,slug,description }
    this.props.addBlogs(blogs)
    this.setState({
        title:'',
        slug:'',
         description:''
    })
}

componentDidMount() {
      console.log(this.props)
}

    render() {
    const {title,slug,description} = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead {this.props.user.username} </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              name="slug"
              onChange={this.onChange}
              value={slug}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    user: state.auth.user
})
export default connect(mapStateToProps, {addBlogs})(Form)