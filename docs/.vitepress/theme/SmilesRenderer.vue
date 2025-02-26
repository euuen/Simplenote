<template>
  <div ref="container" class="smiles-container"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as OCL from 'openchemlib/minimal';

export default {
  props: {
    smiles: {
      type: String,
      required: true
    },
    padding: {
      type: Number,
      default: 0 // 默认内边距
    }
  },
  setup(props) {
    const container = ref(null);

    onMounted(() => {
      // 生成分子结构
      const molecule = OCL.Molecule.fromSmiles(props.smiles);
      let svg = molecule.toSVG(100, 100); // 初始大小，会被覆盖

      // 解析 SVG 的 viewBox 属性
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svg, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      const viewBox = svgElement.getAttribute('viewBox');

      if (viewBox) {
        const [x, y, width, height] = viewBox.split(' ').map(Number);

        // 设置容器大小
        container.value.style.width = `${width + props.padding * 2}px`;
        container.value.style.height = `${height + props.padding * 2}px`;

        // 更新 SVG 的宽度和高度
        svgElement.setAttribute('width', width);
        svgElement.setAttribute('height', height);

        // 将 SVG 插入容器
        container.value.innerHTML = svgElement.outerHTML;
      }
    });

    return {
      container
    };
  }
};
</script>

<style scoped>
.smiles-container {
  display: inline-block;
  vertical-align: middle;
  background-color: blueviolet;
}
</style>