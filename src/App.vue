<template>
  <div  class="min-h-screen bg-gray-100">
    <div class="max-w-lg mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-cetner">
        Task Manager
      </h1>

    <!-- -->
    <p class="text-gray-600 mb-4">
      {{ tasks.length }} {{ tasks.length === 1 ? 'task' : 'tasks' }} | 
      {{ tasks.filter(t => t.completed).length }} completed
    </p>

      <form>
        <div class="flex gap-2">
          <input 
            v-model="newTask"
            type="text"
            placeholder="Enter a task"
            class="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400" :disabled="!newTask.trim()">
            Add
          </button>
        </div>
      </form>


      <!-- Task List -->
      <transition-group
        v-if="tasks.length"
        name="task"
        tag="div"
        class="space-y-2"
      >
       <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </transition-group>
    <p v-else class="text-gray-500 text-center">No tasks yet. Add now!</p>

      <div v-if="tasks.length" class="space-y-2">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle-task="toggleTask"
          @delete-task="deleteTask"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import TaskItem from './components/TaskItem.vue';
import TaskItem from './components/TaskItem.vue';

export default {
  name: 'App',
  components: { TaskItem },
  setup() {
    const tasks = ref([]);
    const newTask = ref('')

    const addTask = () => {
      if(newTask.value.trim())
      {
        tasks.value.push({
          id: Date.now(),
          title: newTask.value,
          completed:false
        });
        newTask.value = '';
      }
    };

    const toggleTask = (id) => {
      const task = tasks.value.find((t) => t.id === id);
      if(task) task.completed = !task.completed;
    }

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((t) => t.id !== id)
    }

    return {tasks, newTask, addTask, toggleTask, deleteTask}

  }
}
</script>
