<template>
  <div class="container goods">
    <h2 class="display-2 title--custom">Товары</h2>
    <div class="row">
      <va-card :title="$t('Форма создания товара')" class="form-wrapper">
        <form class="container">
          <div class="row">
            <div class="flex md4 sm6 xs12">
              <va-input
                v-model="simple"
                placeholder="Название товара"
              />
            </div>
            <div class="flex md4 sm6 xs12">
              <va-input
                v-model="simple"
                placeholder="Цена"
              />
            </div>
          </div>
        </form>
      </va-card>
    </div>
    <div class="row">
      <div class="flex xs12 sm6 lg4 xl3" :key="loop + '-5'">
        <va-card
          image="https://picsum.photos/300/200/?image=1043"
          :title="$t('Пример товара')"
        >
          <p>{{ $t('Краткое описание товара') }}</p>
          <va-button class="btn-edit"> {{ $t('Изменить') }}</va-button>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" :key="loop + '-5'">
        <va-card
          image="https://picsum.photos/300/200/?image=1043"
          :title="$t('Пример товара')"
        >
          <p>{{ $t('Краткое описание товара') }}</p>
          <va-button class="btn-edit"> {{ $t('Изменить') }}</va-button>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" :key="loop + '-5'">
        <va-card
          image="https://picsum.photos/300/200/?image=1043"
          :title="$t('Пример товара')"
        >
          <p>{{ $t('Краткое описание товара') }}</p>
          <va-button class="btn-edit"> {{ $t('Изменить') }}</va-button>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardGoods',
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

    .btn-edit {
      margin: 0.5rem 0;
    }
  }
</style>
