// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  srcDir: 'src/',
  css:['@/assets/css/style.css', '@/assets/css/style.css'],
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
      htmlAttrs:{
        lang: 'ja',
      },
    }
  }
})
