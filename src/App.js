import React, { Component, Fragment} from 'react';
import TodoItem from './todoItem.js';

class App extends Component {
  constructor(props) {
    super(props); // 继承+初始化

    this.state = {
      inputVal: '接下来要做什么呢？',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.selectDelete = this.selectDelete.bind(this)
    // this.selectDelete = this.selectDelete.bind(this,index);
  };

  handleChange(e) {
    // this.setState({
    //   inputVal: e.target.value
    // })
    // 新版react中推荐传入一个函数，因为是异步回调，所以要先对value值进行缓冲
    const value = e.target.value
    this.setState(() => ({
      inputVal: value
    }))
  }

  handleFocus() {
      this.setState({
        inputVal: ''
      })
  }

  handleAdd(e) {
    if(e.keyCode === 13) {
      // 【1】老方法
      // 这里用到了...扩展运算符
      // ...this.state.list 表示取到了原来list中的数据
      // this.setState({
      //   list: [...this.state.list, this.state.inputVal]
      // })

      // 【2】新推荐方法
      this.setState((prevState) => ({
        list: [...prevState.list, this.state.inputVal]
      }))


    }
  }

  selectDelete(index) {
    // 删除
    // let list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list,
    //   inputVal: ''
    // })

    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {
        list: list,
        inputVal: ''
      }
    })
  }

  getItem() {
    return this.state.list.map((item, index) => {
        return (
          <div key={index}>
            <TodoItem content={item} index={index} selectDeleteItem={this.selectDelete.bind(this)} />
            {/*<li key={index} onClick={this.selectDelete.bind(this, index)}>{item}</li>*/}
          </div>
        )
      })
  }
  render() {
    return (
      <Fragment>
        {/*我是注释*/}
        {
          //多行注释
        }
        <div className="inputBox">
          <input type="text"
                 onFocus={this.handleFocus}
                 onChange={this.handleChange}
                 value={this.state.inputVal}
                 onKeyUp={this.handleAdd}
                 />
        </div>

        <div>
          <ul>
            {this.getItem()}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
