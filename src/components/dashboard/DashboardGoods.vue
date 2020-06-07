<template>
  <div class="container goods">
    <h2 class="display-2 title--custom">Товары</h2>
    <div class="row">
      <va-card :title="$t('Форма создания товара')" class="form-wrapper">
        <form class="container">
          <div class="row">
            <div class="flex md4 sm6 xs12">
              <va-input
                v-model="productName"
                placeholder="Название товара"
              />
            </div>
            <div class="flex md4 sm6 xs12">
              <va-select
                label="Категории"
                v-model="category"
                textBy="name"
                :options="categories"
                :multiple="false"
              />
            </div>
            <div class="flex md2 sm6 xs12">
              <va-input
                v-model="price"
                placeholder="Цена"
              />
            </div>
            <div class="flex md2 sm6 xs12">
              <va-input
                v-model="quantity"
                placeholder="Количество"
              />
            </div>
          </div>
          <div class="row">
            <div class="flex md12 sm6 xs12">
              <p class="title section-title">Изображение товара</p>
              <va-file-upload
                type="gallery"
                dropzone
                v-model="prodImage"
              />
            </div>
          </div>
          <div class="row">
            <div class="flex md12 sm6 xs12">
              <p class="title section-title">Описание товара</p>
              <va-input
                v-model="description"
                placeholder="Краткое, но содержательное описание"
              />
            </div>
          </div>
          <div class="row justify--center">
            <va-button type="submit" @click="createProduct">Создать</va-button>
          </div>
        </form>
      </va-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'DashboardGoods',
  data () {
    return {
      category: {},
      productName: '',
      description: '',
      price: null,
      quantity: null,
      prodImage: [],
    }
  },
  computed: {
    ...mapGetters(['categories']),
  },
  methods: {
    async createProduct (event) {
      event.preventDefault()

      const bodyFormData = new FormData()
      bodyFormData.append('name', this.productName)
      bodyFormData.append('description', this.description)
      bodyFormData.append('price', this.price)
      bodyFormData.append('category', this.category._id)
      bodyFormData.append('quantity', this.quantity)
      bodyFormData.append('prodImage', this.prodImage[0])

      for (const value of bodyFormData.values()) {
        console.debug('VALUE ', value)
      }

      await axios({
        method: 'post',
        url: 'http://localhost:8082/api/product/t-create',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(response => {
          console.log('ТОВАР УСПЕШНО СОЗДАН ', response.status)
          this.resetForm()
        })
        .catch(error => console.error('ОШИБКА ПРИ СОЗДАНИИ ТОВАРА ', error.response.status))
    },
    resetForm () {
      this.category = {}
      this.productName = ''
      this.description = ''
      this.price = null
      this.quantity = null
      this.prodImage = []
    },
    ...mapActions(['GET_CATEGORIES']),
  },
  mounted () {
    this.GET_CATEGORIES()
  },
}
</script>

<style lang="scss" scoped>
  .goods {
    .form-wrapper {
      width: 100%;
    }

    .title {
      &--custom {
        margin-bottom: 1rem;
      }
    }

    .section-title {
      margin-bottom: 0.5rem;
    }

    .btn-edit {
      margin: 0.5rem 0;
    }
  }
</style>
