import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { StoreProps } from '@store/index'
import { request } from '@service/index'
// import { StoreProps } from '../../store/index'
// import { request } from '../../service/index'
import { observer, inject } from 'mobx-react'
import './index.scss'

interface IndexProps {
  store: StoreProps
}

@inject('store')
@observer
export default class Index extends Component<IndexProps> {
  onRquestURL = () => {
    request({
      url: 'https://pv.sohu.com/cityjson?ie=utf-8'
    }).then((res) => {
      console.log(res)
    })
  }

  render () {
    const { counter } = this.props.store
    return (
      <View className='index'>
        <View>
          <Button onClick={this.onRquestURL}>request</Button>
        </View>
        <View>
          <Button onClick={() => counter.onOperationCounter('add')}>加</Button>
          <Text>{counter.counterNum}</Text>
          <Button onClick={() => counter.onOperationCounter('reduce')}>减</Button>
        </View>
      </View>
    )
  }
}
