// https://vitepress.dev/guide/custom-theme
import { h, watch} from 'vue'
import { Theme, useRoute} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import smiles from './smiles.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // app.component('SmilesDrawer', SmilesDrawer);
    app.component("smiles", smiles);
  },
  setup() {
	const route = useRoute();
	watch(
		()=> route.path,
		()=>{
			if(typeof window != 'undefined'){//这里是防止你publish到github上可能会发生的报错
				// alert("jjs");
				// MathJax.typesetPromise();//让mathjax重新渲染
        setTimeout("MathJax.typesetPromise()", 200);
			}
		}
	);
  }
} satisfies Theme
