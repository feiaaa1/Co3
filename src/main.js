import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const directives = {
  animate: {
    mounted(el, binding) {
      const animationType = binding.arg || 'fade' // 默认淡入动画
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 可见时触发动画
              el.style.animationPlayState = 'running' // 恢复动画
              // 添加动画类（参考的动画触发逻辑）
              const delay = binding.value?.delay || 0
              setTimeout(() => {
                el.classList.add(`${animationType}-enter-active`)
                el.style.opacity = 1
              }, delay)

              // 单次执行后取消观察（参考的优化）
              if (binding.modifiers.once) observer.unobserve(el)
              }
            else {
              // 不可见时清理动画
              el.style.animationPlayState = 'paused' // 暂停动画
              el.classList.remove(`${animationType}-enter-active`)
              el.style.opacity = 0
            }
          })
        }
      )

      el.style.animationPlayState = 'paused' // 初始暂停动画
      el.style.opacity = 0 // 初始隐藏元素
      observer.observe(el)
      el._entranceObserver = observer // 保存观察器实例
    },
    unmounted(el) {
      if (el._entranceObserver) {
        el._entranceObserver.disconnect() // 清理观察器（参考资源回收）
      }
    },
  },
}

Object.entries(directives).forEach(([name, config]) => {
  app.directive(name, config)
})


app.use(createPinia())
app.use(router)

app.mount('#app')
