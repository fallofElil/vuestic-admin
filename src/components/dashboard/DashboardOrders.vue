<template>
  <div class="dashboard">
    <div class="row">
      <div class="flex xs12">
        <dashboard-table />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardTable from './DashboardTable'

export default {
  name: 'dashboard-orders',
  components: {
    DashboardTable,
  },
}
</script>

<style lang="scss">
  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
    }
  }
</style>
