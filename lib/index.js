
// loading.js
import LoadingComponent from './components/loading.vue'

let $vm

export default {
    install(Vue, options) {
        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let loading = {
            show(text) {
                $vm.show = true;

                $vm.text = text;
            },
            hide() {
                $vm.show = false;
            }
        };

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }

        Vue.$myName = '劳卜';//全局属性和方法

        Vue.directive('focus',{//添加全局资源包含了添加全局的指令／过滤器／过渡等
            bind: function() {},
            // 当绑定元素插入到 DOM 中。
            inserted: function(el, binding, vnode, oldVnode) {
                // 聚焦元素
                el.focus();
            },
            update: function() {},
            componentUpdated: function() {},
            unbind: function() {}
        })

        // Vue.prototype.$loading = Vue.$loading;

        Vue.mixin({
            methods: {
                greetingFn() {
                    console.log('greeting');
                }
            },
            // created() {//也可以通过绑定实例方法进行操作 如Vue.prototype.$loading = Vue.$loading;
            //     this.$loading = Vue.$loading;
            // }
        });

        Vue.prototype.showMyName = value => {
            console.log(value);
        };
        Vue.prototype.$loading = Vue.$loading;

    }
}