import Vue from 'vue'
import ECharts from 'vue-echarts'

import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'

import 'echarts/lib/component/grid'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/timeline'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markArea'
import 'echarts/lib/component/visualMap'
export default{
    install(Vue) {
        Vue.component('v-chart', ECharts)
    }
}

