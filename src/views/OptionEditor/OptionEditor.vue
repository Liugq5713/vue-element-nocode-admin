<template>
  <div>
    <el-row>
      <el-col :span="12">
        <Options />
      </el-col>
      <el-col :span="12">
        <OptionExhibition />
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
  }
};
</script>