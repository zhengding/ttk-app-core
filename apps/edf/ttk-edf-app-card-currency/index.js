import config from './config'
import * as data from './data'

export default {
    name: 'ttk-edf-app-card-currency',
    version: "1.0.0",
    moduleName: "基础档案",
    description: "币种卡片",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        require.ensure([], require => {
            cb(require('./component'), require('./action'), require('./reducer'))
        }, "app-card-currency")
    }
}