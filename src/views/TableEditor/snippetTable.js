import {genTableColumnSnippet} from './snippetTableColumn'
import { genTableQuery }from './snippetTableQuery'

export const genTableSnippet = (headers,changeCallback='getList') => {
  return `
  <template>
  <div class="app-container">
    <div style="margin-bottom: 20px">
      ${genTableQuery(headers,changeCallback)}
      <el-button
        type="primary"
        style="margin-left: 10px"
        icon="el-icon-search"
        @click="${changeCallback}ByQuery"
      >搜索</el-button>
    </div>
    <el-table :data="lists" border style="width: 100%">
      ${genTableColumnSnippet(headers)}
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editList(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :page.sync="query.cursor"
      :limit.sync="query.limit"
      @pagination="${changeCallback}"
    />
  </div>
</template>

<script>
import { ${changeCallback} } from "./api.js";

export default {
  data() {
    return {
      lists: undefined,
      query: {
        limit: 20,
        cursor: 1
      },
      total: 0
    };
  },
  created() {
    this.${changeCallback}();
  },
  methods: {
    async ${changeCallback}() {
      const res = await getList(this.query);
      this.lists = res.data.items;
      this.total = res.data.total_count;
    },
    ${changeCallback}ByQuery() {
      this.query.cursor = 1;
      this.getList();
    },
    editList(list) {
      console.log("list", list);
    }
  }
};
</script>`;
};
