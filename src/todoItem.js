import React, { Component} from 'react';

class Todoitem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // 优化之处
    const {selectDeleteItem} = this.props;
    const {index} = this.props;
    selectDeleteItem(index);

    // this.props.selectDeleteItem(this.props.index);
    // console.log(this.props.index);
  }

  render () {
    // es6 语法
    // 缓冲数据
    const {content} = this.props;
    const {index} = this.props;

    return (
      <li key={index} onClick={this.handleClick}>{content}</li>
    )
  }
}

export default Todoitem;
