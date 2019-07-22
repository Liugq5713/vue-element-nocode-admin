<template>
  <div>
    <pre>
      <code class="xml">
       
      </code>
    </pre>
  </div>
</template>

<script>
import {isObject,isArray} from '@/utils'
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

export default {
  props:{
    options:{
      type:Object,
    }
  },
  created(){
    hljs.registerLanguage('xml', xml);
     hljs.initHighlightingOnLoad();
    console.log('hljs', hljs)
  },
  methods:{
    genOptions(options){
      if(isObject(options)){
        return
      }
      if(isArray(options)){
        return
      }
    }
  }
};
</script>