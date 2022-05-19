import Vue from 'vue'
import wrap from "@vue/web-component-wrapper";
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

window.customElements.define("v-webcomponent", wrap(Vue, App) as any);
