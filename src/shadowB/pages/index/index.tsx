import React from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default () => {
  const onTrunLink = (type?: '/shadowA') => {
    let url = '/pages/index/index'
    if (type) {
      url = type + url
    }
    Taro.navigateTo({ url })
  }

  return (
    <View className='index'>
      <View>
        <Button onClick={() => onTrunLink('/shadowA')}>跳转shadowA</Button>
        <Button onClick={() => onTrunLink()}>跳转主包</Button>
      </View>
    </View>
  )
}
