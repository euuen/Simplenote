<!-- <template>
    <div ref="smilesContainer" class="smiles-container"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import SmilesDrawer from 'smiles-drawer';
  
  export default {
    name: 'SmilesDrawerComponent',
    props: {
      smiles: {
        type: String,
        required: true,
      },
      width: {
        type: Number,
        default: 300,
      },
      height: {
        type: Number,
        default: 300,
      },
    },
    setup(props) {
      const smilesContainer = ref(null);
  
      onMounted(() => {
        const options = {
          width: props.width,
          height: props.height,
        };
  
        const smilesDrawer = new SmilesDrawer.Drawer(options);
        SmilesDrawer.parse(props.smiles, function (tree) {
          smilesDrawer.draw(tree, smilesContainer.value, 'light', false);
        });
      });
  
      return {
        smilesContainer,
      };
    },
  };
  </script>
  
  <style scoped>
  .smiles-container {
    display: inline-block;
    border: 1px solid #ccc;
    margin: 10px 0;
  }
  </style> -->