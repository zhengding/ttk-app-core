import 'babel-polyfill'
import 'url-polyfill'
import 'es5-shim'
import 'es5-shim/es5-sham'
import 'console-polyfill'
import 'fetch-ie8'
import 'babel-polyfill'
import FastClick from 'fastclick'
import { config, start, componentFactory } from 'edf-meta-engine'
import * as edfComponents from 'edf-component'
// import raf from 'raf'
import myConfig from './config'
// raf.polyfill()

if (typeof (_hmt) == 'undefined') window._hmt = []
//note-start
//note-start和note-end之间的内容用脚手架匹配，请不要再该区域书写内容，在执行ttk reset过程中会被删除

import ttk_edf_app_root from './apps/edf/ttk-edf-app-root/index.js'
//import ttk_edf_app_login from './apps/edf/ttk-edf-app-login/index.js'
import app_test from './apps/test/app-test'


const apps = {
    [app_test.name]: app_test,
    [ttk_edf_app_root.name]: ttk_edf_app_root,
    //[ttk_edf_app_login.name]: ttk_edf_app_login
}
//note-end

//EDF模块
//财务&资产模块
//税务模块



//业务模块

apps.config = (options) => {
    Object.keys(options).forEach(key => {
        const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
        Object.keys(apps).forEach(appName => {
            if (appName != 'config') {
                if (reg.test(appName) && apps[appName].config) {
                    apps[appName].config(options[key])
                }
            }
        })
    })
}


apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(edfComponents).forEach(key => {
    componentFactory.registerComponent(key, edfComponents[key])
})



start()
FastClick.attach(document.body)
