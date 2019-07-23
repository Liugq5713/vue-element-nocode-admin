<template>
  <div>
    <el-row>
      <el-col :span="12">
        <Options :optionsToCopy.sync="optionsToCopy" />
      </el-col>
      <el-col :span="12">
        <OptionExhibition :optionsToCopy="optionsToCopy" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OptionExhibition from "./OptionExhibition";
import Options from "./Options";
export default {
  components: {
    Options,
    OptionExhibition
  },
  data() {
    return {
      optionsToCopy: []
    };
  }
};
</script>