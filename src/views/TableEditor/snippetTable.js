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
        @click="getListByQuery"
      >搜索</el-button>
    </div>
    <el-table :data="lists" border style="width: 100%">
      ${genTableColumnSnippet(headers)}
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editlist(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :page.sync="query.cursor"
      :limit.sync="query.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { getList } from "./api.js";

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
    this.getList();
  },
  methods: {
    async getList() {
      const res = await getList(this.query);
      this.lists = res.data.items;
      this.total = res.data.total_count;
    },
    getListByQuery() {
      this.query.cursor = 1;
      this.getList();
    },
    editlist(list) {
      console.log("list", list);
    }
  }
};
</script>`;
};
