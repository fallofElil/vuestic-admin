<template>
  <div class="dashboard">
    <div class="row">
      <h2 class="display-2 title--custom">Категории</h2>
    </div>
    <div class="row">
      <div class="flex xs12">
        <va-card title="Текущие заказы">
          <va-data-table
            :fields="fields"
            :data="orders"
            @row-clicked="modalOpen = true"
            clickable
          >
            <!--            <template slot="trend" slot-scope="props">-->
            <!--              <va-icon :name="getTrendIcon(props.rowData)" :color="getTrendColor(props.rowData)" />-->
            <!--            </template>-->

            <!--            <template slot="status" slot-scope="props">-->
            <!--              <va-badge :color="props.rowData.color">-->
            <!--                {{ props.rowData.status }}-->
            <!--              </va-badge>-->
            <!--            </template>-->
          </va-data-table>
        </va-card>
      </div>
    </div>
    <va-modal
      v-model="modalOpen"
      title="ЗАКАЗ 300300"
      :thead="thead"
      :tbody="tbody"
      :message="message"
      okText="Ок"
      cancelText="Отмена"
    />
  </div>
</template>

<script>
export default {
  name: 'dashboard-orders',
  data: () => ({
    orders: [
      {
        orderNumber: 300100,
        userName: 'Anonymous',
        email: 'clientdoe@yahoo.com',
        totalSum: 70000,
        status: 'не рассмотрено',
      },
      {
        orderNumber: 300200,
        userName: 'Anonymous',
        email: 'sampletest@yahoo.com',
        totalSum: 20000,
        status: 'не рассмотрено',
      },
      {
        orderNumber: 300300,
        userName: 'Anonymous',
        email: 'examplen@yahoo.com',
        totalSum: 40000,
        status: 'в процессе',
      },
      {
        orderNumber: 300400,
        userName: 'Andrew Petrov',
        email: 'andrewpetroff@yahoo.com',
        totalSum: 50000,
        status: 'в процессе',
      },
      {
        orderNumber: 300500,
        userName: 'Konstantin Razumov',
        email: 'kerkit@gmail.com',
        totalSum: 60000,
        status: 'не рассмотрено',
      },
    ],
    modalOpen: false,
    thead: ['ИДЕНТИФИКАТОР', 'ИМЕНОВАНИЕ', 'ЦЕНА (РУБ)'],
    tbody: [
      {
        id: '4538',
        name: 'Ворота',
        price: 30000,
      },
      {
        id: '4520',
        name: 'Качель садова',
        price: 10000,
      },
    ],
    message: 'Добавьте больше позолоченный элементов при покраске узора ворот\n' +
            'При покраске качели применить тёмно-бордовые тона ',
  }),
  computed: {
    fields () {
      return [{
        name: 'orderNumber',
        title: 'Номер заказа',
      }, {
        name: 'userName',
        title: 'Имя',
      }, {
        name: 'email',
        title: 'Email',
      }, {
        name: 'totalSum',
        title: 'Сумма заказа',
      }, {
        name: 'status',
        title: 'Стастус',
      }]
    },
  },
  methods: {
    showModal () {
      this.modalOpen = true
    },
  },
}
</script>

<style lang="scss">
  .title {
    &--custom {
      margin-bottom: 1rem;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
    }
  }
</style>
