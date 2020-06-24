<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="display-2 title--custom">Категории</h2>
    </div>
    <div class="row mb-4">
      <va-card title="Текущие категории">
        <va-chip
          class="custom-chip"
          color="secondary"
          :key="index"
          v-for="(category, index) in categories">
          {{ category }}
          <va-button flat small color="info" icon="glyphicon glyphicon-pencil" />
          <va-button flat small color="info" icon="ion-md-close ion" />
        </va-chip>
      </va-card>
    </div>
    <div class="row">
      <va-card :title="$t('Форма создания и редактирования категории')" class="form-wrapper">
        <form class="row">
          <div class="col input-name-container">
            <va-input
              v-model="categoryName"
              placeholder="Название категории"
            />
          </div>
          <div class="col">
            <va-button type="submit" @click="createProduct">Сохранить</va-button>
          </div>
        </form>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-categories',
  data: () => ({
    categories: [
      'Предметы декора',
      'Ограда',
      'Инструменты',
    ],
    categoryName: '',
  }),
}
</script>

<style lang="scss">
.title {
  &--custom {
    margin-bottom: 1rem;
  }
}

.custom-chip {
  .va-chip__content {
    .va-icon {
      color: rgb(0, 44, 133) !important;
    }
  }
}

.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  .va-card__body {
    padding-top: 1rem;
    padding-left: 2rem;
  }
}

.input-name-container {
  width: 500px;
}
</style>
