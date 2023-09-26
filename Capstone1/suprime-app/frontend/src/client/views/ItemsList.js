import React, { Component } from 'react'
import { Connect } from 'react-redux'

class ItemsList extends Component {
  constructor(props) {
    super(props)

    this.state = { items: [] }
  }
  render() {
    return <></>
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default Connect(mapStateToProps, mapDispatchToProps)(ItemsList)
