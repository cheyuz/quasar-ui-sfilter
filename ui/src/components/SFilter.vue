<template>
  <q-card :flat="flat" bordered>
    <q-card-section v-if="title" :class="titleClass">
      <q-item dense>
        <q-item-section avatar>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
          <div class="text-h6">
            {{ title }}
          </div>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="q-gutter-md">
        <s-inputs v-model="model" :inputs="inputs" :horizontal="horizontal" :outlined="outlined" :dense="dense"
                  :filled="filled"/>
        <slot />
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="bg-grey-1">
      <div class="row q-gutter-md">
        <q-space />
        <q-btn @click="reset" label="Reset" flat >
          <q-icon name="refresh" />
          <q-tooltip label="Reset" force-position="top">
            <q-icon name="refresh" />
          </q-tooltip>
        </q-btn>
        <q-btn color="primary" @click="search" icon="search" :unelevated="flat" :loading="loading">Search</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {SInputs} from "quasar-ui-sform";
import {computed, ref} from "vue";

export default {
  name: "SFilter",
  components: {
    SInputs
  },
  emits: ["search"],
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    titleClass: {
      type: String,
      default: ""
    },
    inputs: {
      type: Array,
      default: () => [],
      required: true
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "filter_list"
    }
  },
  setup(props, {emit}) {
    const model = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value)
    });
    const search = () => {
      emit("search", model.value);
    }
    const reset = () => {
      model.value = {};
    }
    return {
      model,
      search,
      reset,
    }
  }
}
</script>

<style scoped>

</style>