import config from './config'
import * as data from './data'

export default {
	name: "ttk-edf-app-hot-search-widget",
	version: "1.0.0",
	description: "ttk-edf-app-hot-search-widget",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "ttk-edf-app-hot-search-widget")
	}
}