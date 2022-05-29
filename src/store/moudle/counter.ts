import { makeAutoObservable } from 'mobx'

/** 定义当前模块的接口，方便使用的时候直接获取到 类型提示 */
export interface CounterProps {
  /** 数量 */
  counterNum: number
  /**
   * 操作函数
   * @param {add|reduce} type 操作类型
   */
  onOperationCounter: (type: 'add'|'reduce') => void
}

class Counter {
  constructor () {
    // mobx6 可以直接在constructor中定义这个，然后不用去用action 和 observable 绑定字段和函数
    makeAutoObservable(this)
  }

  counterNum: number = 0

  onOperationCounter = (type: 'add'|'reduce') => {
    if (type === 'add') {
      this.counterNum++
    } else {
      this.counterNum--
    }
  }
}
// 导出
export default new Counter()
