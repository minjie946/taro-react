/**
 * @description 自动上传项目
 * @link https://thoughts.aliyun.com/sharespace/5e86a419546fd9001aee81f2/docs/5fdad78bae5c3d001f29be5e
 * @author minjie
 * @Date 2021-08-11 13:34
 * @LastEditTime 2022-05-29 17:23
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
const ci = require('miniprogram-ci')
const { version } = require('../../package.json')
const dayjs = require('dayjs')

const project = new ci.Project({
  appid: '微信小程序的appid',
  type: 'miniProgram', // 项目的类型，有效值 miniProgram/miniProgramPlugin/miniGame/miniGamePlugin
  projectPath: process.cwd() + '/dist/weapp', // 项目的路径，即 project.config.json 所在的目录
  privateKeyPath: process.cwd() + '/config/upload/private.微信小程序的appid.key', // 私钥文件地址
  ignores: ['node_modules/**/*'],
})
ci.upload({
  project,
  version,
  desc: dayjs().format('YYYY年MM月DD日 HH:mm:ss') + '提交上传',
  setting: {
    urlCheck: true,
    es6: false,
    postcss: false,
    minified: false
  },
  robot: 2
}).then(res => {
  console.log(res)
  console.log('上传成功')
}).catch(error => {
  if (error.errCode == -1) {
    console.log('上传成功')
  }
  console.log(error)
  console.log('上传失败')
  process.exit(-1)
})