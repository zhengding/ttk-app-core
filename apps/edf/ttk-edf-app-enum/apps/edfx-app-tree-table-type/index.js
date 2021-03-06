import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-enum-type",
	version: "1.0.0",
	moduleName: '系统管理',
	description: "枚举",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-enum-type")
	}
}