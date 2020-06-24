<template>
  <div class="dashboard">
    <!-- <div class="row">
      <div class="flex xs12">
        <dashboard-table />
      </div>
    </div> -->
    <div class="row">
      <div class="flex xs12">
        <va-card title="Пользователи">
          <va-data-table
            :fields="fields"
            :data="users"
            no-pagination
          >
            <template slot="actions" slot-scope="props">
              <va-button flat small color="gray" @click="edit(props.rowData)" class="ma-0">
                Редактировать
              </va-button>

              <va-button flat small color="danger" @click="remove(props.rowData)" class="ma-0">
                Удалить
              </va-button>
            </template>
          </va-data-table>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card title="Форма создания / редактирования">
          <div class="row">
            <div class="flex md4 sm6 xs12">
              <va-input
                label="Имя пользователя"
                v-model="userName"
              />
            </div>
            <div class="flex md4 sm6 xs12">
              <va-input
                label="Email"
                v-model="userEmail"
              />
            </div>
            <div class="flex md4 sm6 xs12">
              <va-select
                label="Роль"
                v-model="userRole"
                textBy="role"
                :options="roles"
                :multiple="false"
              />
            </div>
          </div>
          <div class="row">
            <va-button type="submit">Сохранить</va-button>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'dashboard-users',
  data: () => ({
    userName: '',
    userEmail: '',
    userRole: '',
    roles: ['client', 'admin'],
  }),
  computed: {
    fields () {
      return [{
        name: 'name',
        title: 'Имя',
      }, {
        name: 'email',
        title: 'email',
      }, {
        name: 'role',
        title: 'Роль',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['GET_USERS']),
  },
  mounted () {
    this.GET_USERS()
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

/*fields () {
      return [{
        name: 'name',
        title: 'Имя',
      }, {
        name: 'email',
        title: 'email',
      }, {
        name: 'role',
        title: 'Роль',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },*/
