import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'icon', type:"image/png", href: '/images/favicon.png'},
        { rel: 'stylesheet', href: '/css/bootstrap/bootstrap.min.css'},
        { rel: 'stylesheet', href: '/css/site.css'},
      ],
      script:[
        { src: 'js/bootstrap/bootstrap.min.js'}
      ]
    }
  }
})