<template>
  <div class="app-container">
    <ElForm
      ref="form"
      :model="form"
      label-width="120px">
      <ElFormItem label="Activity name">
        <ElInput v-model="form.name" />
      </ElFormItem>
      <ElFormItem label="Activity zone">
        <ElSelect
          v-model="form.region"
          placeholder="please select your zone">
          <ElOption
            label="Zone one"
            value="shanghai" />
          <ElOption
            label="Zone two"
            value="beijing" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Activity time">
        <ElCol :span="11">
          <ElDatePicker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%;" />
        </ElCol>
        <ElCol
          :span="2"
          class="line">
          -
        </ElCol>
        <ElCol :span="11">
          <ElTimePicker
            v-model="form.date2"
            type="fixed-time"
            placeholder="Pick a time"
            style="width: 100%;" />
        </ElCol>
      </ElFormItem>
      <ElFormItem label="Instant delivery">
        <ElSwitch v-model="form.delivery" />
      </ElFormItem>
      <ElFormItem label="Activity type">
        <ElCheckboxGroup v-model="form.type">
          <ElCheckbox
            label="Online activities"
            name="type" />
          <ElCheckbox
            label="Promotion activities"
            name="type" />
          <ElCheckbox
            label="Offline activities"
            name="type" />
          <ElCheckbox
            label="Simple brand exposure"
            name="type" />
        </ElCheckboxGroup>
      </ElFormItem>
      <ElFormItem label="Resources">
        <ElRadioGroup v-model="form.resource">
          <ElRadio label="Sponsor" />
          <ElRadio label="Venue" />
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="Activity form">
        <ElInput
          v-model="form.desc"
          type="textarea" />
      </ElFormItem>
      <ElFormItem>
        <ElButton
          type="primary"
          @click="onSubmit">
          Create
        </ElButton>
        <ElButton @click="onCancel">
          Cancel
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning',
      })
    },
  },
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
