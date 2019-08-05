import Vue from 'vue';
import Box from './Box';

export var box = (function () {

    return function (opts) {//参数
        var defaults = {
            //默认值
            title: '',
            content: '',
            cancle: '',
            ok: '',
            handleCancle: null,
            handleOk: null
        };
        var MyComponent = Vue.extend(Box);
        for (var attr in defaults) {
            defaults[attr] = opts[attr];
        }
        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancle: defaults.cancle,
                ok: defaults.ok
            },
            methods: {
                handleCancle() {
                    defaults.handleCancle && defaults.handleCancle.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    };
})();
