<template>
  <div class="app-container">
    <ElTable
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <ElTableColumn
        align="center"
        label="ID"
        width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </ElTableColumn>
      <ElTableColumn label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </ElTableColumn>
      <ElTableColumn
        label="Author"
        width="110"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </ElTableColumn>
      <ElTableColumn
        label="Pageviews"
        width="110"
        align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </ElTableColumn>
      <ElTableColumn
        class-name="status-col"
        label="Status"
        width="110"
        align="center">
        <template slot-scope="scope">
          <ElTag :type="scope.row.status | statusFilter">
            {{ scope.row.status }}
          </ElTag>
        </template>
      </ElTableColumn>
      <ElTableColumn
        align="center"
        prop="created_at"
        label="Display_time"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" /> <span>{{ scope.row.display_time }}</span>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger',
      }
      return statusMap[status]
    },
  },
  data() {
    return {
      list: null,
      listLoading: true,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
  },
}
</script>
