<template>
  <q-page padding>
    <s-filter
      v-model="data"
      title="Filter"
      icon="search"
      title-class="bg-primary text-white"
      :inputs="inputs"
      outlined
      @search="search"
      :loading="loading"
    />
  </q-page>
</template>

<script>
import {SFilter} from "../../../src/vue-plugin";
import {ref} from "vue";

export default {
  name: 'Test1',
  components: {
    SFilter
  },
  setup() {
    const loading = ref(false);
    const data = ref({
      name: '',
      email: '',
      phone: '',
    });
    const inputs = ref([
      {label: 'Name', field: 'name', icon: 'person',},
      {label: 'Email', field: 'email', icon: 'email',},
      {label: 'Phone', field: 'phone', icon: 'phone',},
    ]);
    const search = () => {
      loading.value = true;
      // delay 2 seconds
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }
    return {
      inputs,
      data,
      search,
      loading,
    };
  }
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
