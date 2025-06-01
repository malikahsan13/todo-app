<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
    <div class="flex items-center">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle-task', task.id)"
        class="mr-2"
      />
      <span :class="{ 'line-through text-gray-500': task.completed }">
        {{ task.title }}
      </span>
    </div>
    <button
      @click="$emit('delete-task', task.id)"
      class="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>