import React from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default () => {
  const onTrunLink = (type?: '/shadowB') => {
    let url = '/pages/index/index'
    if (type) {
      url = type + url
    }
    Taro.navigateTo({ url })
  }

  return (
    <View className='index'>
      <View>
        <Button onClick={() => onTrunLink('/shadowB')}>跳转shadowB</Button>
        <Button onClick={() => onTrunLink()}>跳转主包</Button>
      </View>
    </View>
  )
}
