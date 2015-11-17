import React from 'react'

var Tabs = React.createClass({
  getDefaultProps() {
    return {
      onTabClick: function() {}
    }
  },

  getInitialState() {
    return {
      selectedIndex: 0
    }
  },

  handleClick(item, i) {
    this.setState({
      selectedIndex: i
    })

    this.props.onTabClick(item, i)
  },

  render() {
    var items = (
      this.props.items.map((item, i) => {
        return (
          <li className={this.state.selectedIndex === i ? 'active' : ''}
            key={item.value} 
            onClick={this.handleClick.bind(this, item, i)}>
            <a href="javascript:;">{item.label}</a>
          </li>
        )
      })
    )

    return (
      <ul className={this.props.className}>
        {items}
      </ul>
    )
  }
})

export default Tabs
