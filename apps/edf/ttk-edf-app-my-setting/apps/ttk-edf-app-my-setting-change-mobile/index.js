import config from './config'
import * as data from './data'

export default {
	name: "ttk-edf-app-my-setting-change-mobile",
	version: "1.0.0",
	moduleName: "系统管理",
    description: "修改手机",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "ttk-edf-app-my-setting-change-mobile")
	}
}