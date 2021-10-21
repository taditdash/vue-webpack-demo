import '../css/main.scss'
import Vue from 'vue'
import vuetify from '../plugins/vuetify'
import HelloWorld from "../components/HelloWorld.vue";

import { secondJsElement, clickForTextUpdate } from "./second"

document.getElementById('firstJsElement').textContent = 'Hi! Welcome';
secondJsElement.textContent = "Trying to access variable from another js file";

clickForTextUpdate.addEventListener('click', function(){
    secondJsElement.textContent = "I am changed by click!";
})

import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
localize('en', en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// new Vue({
//     el: "[vue=app]",
//     data: {
//         email: ""
//     },
//     template: '<input type="text" v-model="email">'
// })

new Vue({
    vuetify,
    render: h => h(HelloWorld)
}).$mount('[vue=app]')