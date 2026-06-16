// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  srcDir: 'src/',
  css:['@/assets/css/style.css', '@/assets/css/style.css'],

  ssr: false,

  app: {
    head:{
      title: 'JSPS科研費基盤研究（S）24H00011',
      charset: 'utf-8',
      meta:[
        {
          name: 'JSPS科研費基盤研究（S）24H00011 史料データセンシングに基づく日本列島記憶継承モデルの確立',
          content: 'JSPS科研費基盤研究（S）(24H00011)「史料データセンシングに基づく日本列島記憶継承モデルの確立」の概要・活動をお知らせします',
        }
      ],
      link:[
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/cdps/jmm/favicon.svg',
        },
        {
          rel: 'alternate icon',
          href: '/cdps/jmm/favicon.ico',
        }
      ],
      htmlAttrs:{
        lang: 'ja',
      },
    },
    baseURL: "/cdps/jmm/",
  },

  modules: ['@nuxt/image']
})
