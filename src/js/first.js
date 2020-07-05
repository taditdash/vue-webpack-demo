import '../css/main.scss'
import Vue from 'vue'
import HelloWorld from "../components/HelloWorld.vue";

import { secondJsElement, clickForTextUpdate } from "./second"

document.getElementById('firstJsElement').textContent = 'Hi! Welcome';
secondJsElement.textContent = "Trying to access variable from another js file";

clickForTextUpdate.addEventListener('click', function(){
    secondJsElement.textContent = "I am changed by click!";
})

// new Vue({
//     el: "[vue=app]",
//     data: {
//         email: ""
//     },
//     template: '<input type="text" v-model="email">'
// })

new Vue({
    render: h => h(HelloWorld)
}).$mount('[vue=app]')