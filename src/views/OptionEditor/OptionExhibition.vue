<template>
  <div>
    <pre>
      <code class="xml">
       {{code}}
      </code>
    </pre>
  </div>
</template>

<script>
import { isArray } from "@/utils";
import hljs from "highlight.js/lib/highlight";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github.css";

export default {
  props: {
    optionsToCopy: {
      type: null
    }
  },
  data() {
    return {
      code: []
    };
  },
  watch: {
    optionsToCopy(val) {
      this.code = this.genOptions(val);
      hljs.registerLanguage("xml", xml);
      hljs.initHighlightingOnLoad();
    }
  },
  created() {
    hljs.registerLanguage("xml", xml);
    hljs.initHighlightingOnLoad();
  },
  methods: {
    genOptions(optionsToCopy) {
      const options = optionsToCopy;
      if (isArray(options)) {
        return options
          .map(opt => {
            return ` <el-tag v-if='status === ${opt.value}' type='${opt.tagType}'> ${opt.label} </el-tag>`;
          })
          .join("\n     ");
      } else {
        return ` <el-tag v-if='status === ${options.value}' type='${options.tagType}'>{{ ${options.label} }}</el-tag>`;
      }
    }
  }
};
</script>