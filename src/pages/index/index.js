import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import {deleteCommentActionCreator,requestCommentsByPostActionCreator} from '../../actions/comment'
import './index.css'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    //dispatch(add())
  },
  dec () {
    //dispatch(minus())
    dispatch(deleteCommentActionCreator.createRequestAction({id:1,postId:1}))
  },
  asyncAdd () {
    //dispatch(asyncAdd())
    dispatch(requestCommentsByPostActionCreator.createRequestAction({postId:1,lastId:0}))
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
