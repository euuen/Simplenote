// https://vitepress.dev/guide/custom-theme
import { h, watch, toRefs} from 'vue'
import { Theme, useRoute, useData} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import './style.css'
import smiles from './smiles.vue'
import theme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("smiles", smiles);
  },

  setup() {
    const {frontmatter} = useData();
    const route = useRoute();
    watch(
      ()=> route.path,
      ()=>{
        if(typeof window != 'undefined'){//这里是防止你publish到github上可能会发生的报错
          // MathJax.typesetPromise();//让mathjax重新渲染
          setTimeout("MathJax.typesetPromise()", 200);
        }
      }
    );
    giscusTalk({
      repo: 'euuen/Simplenote', 
      repoId: 'R_kgDON3qnFA',   
      category: 'Announcements', // default: `General` 
      categoryId: 'DIC_kwDON3qnFM4CoNve', 
      mapping: 'pathname', // default: `pathname`
      inputPosition: 'top', // default: `top`
      lang: 'zh-CN', // default: `zh-CN`
      lightTheme: 'light', // default: `light`
      darkTheme: 'transparent_dark', 
    },{
      frontmatter, route
    }, true);
  }
} satisfies Theme
