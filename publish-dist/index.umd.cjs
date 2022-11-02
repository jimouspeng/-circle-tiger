/*
 * @Author: jimouspeng
 * @Date: 2022-11-01 17:01:29
 * @Description:
 * @FilePath: \circle-tiger\publish-dist\index.umd.cjs
 */
;(function (e, n) {
    typeof exports === 'object' && typeof module < 'u' ? (module.exports = n(require('vue'))) : typeof define === 'function' && define.amd ? define(['vue'], n) : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.circleTiger = n(e.Vue)))
})(this, function (e) {
    'use strict'
    const n = (t) => (e.pushScopeId('data-v-ed8b13bd'), (t = t()), e.popScopeId(), t),
        i = { class: 'card' },
        r = n(() => e.createElementVNode('p', null, [e.createTextVNode(' Edit '), e.createElementVNode('code', null, 'components/HelloWorld.vue'), e.createTextVNode(' to test HMR ')], -1)),
        a = n(() => e.createElementVNode('span', null, 'Vue3\u7EC4\u4EF6\u5C55\u793A', -1)),
        _ = { name: 'HelloWorld' },
        p = e.defineComponent({
            ..._,
            props: { msg: null },
            setup(t) {
                const o = e.ref(0)
                return (s, c) => (
                    e.openBlock(),
                    e.createElementBlock(
                        e.Fragment,
                        null,
                        [e.createElementVNode('h1', null, e.toDisplayString(t.msg), 1), e.createElementVNode('div', i, [e.createElementVNode('button', { type: 'button', onClick: c[0] || (c[0] = (d) => o.value++) }, 'count is ' + e.toDisplayString(o.value), 1), r]), a],
                        64
                    )
                )
            },
        }),
        f = '',
        l = ((t, o) => {
            const s = t.__vccOpts || t
            for (const [c, d] of o) {
s[c] = d
}
            return s
        })(p, [['__scopeId', 'data-v-ed8b13bd']])
    l.install = (t) => {
        t.component(l.name, l)
    }),
        console.log('===================================='),
        console.log(l.name, 'hahahah'),
        console.log('====================================')
    const m = [l]
    return {
        install: (t) => {
            m.forEach((o) => {
                t.component(o.name, o)
            })
        },
        HelloWorld: l,
    }
})
