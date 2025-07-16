import { createRouter, createWebHistory } from 'vue-router'
import welcome from '@/views/welcome.vue'
import chatRoom from '@/views/chatRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/chatRoom',
      name: 'chatRoom',
      component: chatRoom,
    }
    
  ],
})

export default router
