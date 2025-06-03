import { ref } from 'vue';
import TaskItem from './components/TaskItem.vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    components: { TaskItem },
    setup() {
        const tasks = ref([]);
        const newTask = ref('');
        const addTask = () => {
            if (newTask.value.trim()) {
                tasks.value.push({
                    id: Date.now(),
                    title: newTask.value,
                    completed: false
                });
            }
            else {
                newTask.value = '';
            }
        };
        const toggleTask = (id) => {
            const task = tasks.value.find((t) => t.id === id);
            if (task)
                task.completed = !task.completed;
        };
        const deleteTask = (id) => {
            tasks.value = tasks.value.filter((t) => t.id !== id);
        };
        const clearAll = () => {
            tasks.value = [];
        };
        return { tasks, newTask, addTask, toggleTask, deleteTask, clearAll };
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = { TaskItem };
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "min-h-screen bg-gray-100" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "max-w-lg mx-auto p-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-3xl font-bold text-gray-800 mb-6 text-cetner" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-gray-600 mb-4" },
});
(__VLS_ctx.tasks.length);
(__VLS_ctx.tasks.length === 1 ? 'task' : 'tasks');
(__VLS_ctx.tasks.filter(t => t.completed).length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.addTask) },
    ...{ class: "mb-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex gap-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    value: (__VLS_ctx.newTask),
    type: "text",
    placeholder: "Enter a task",
    ...{ class: "flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
    ...{ class: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400" },
    disabled: (!__VLS_ctx.newTask.trim()),
});
if (__VLS_ctx.tasks.length) {
    const __VLS_0 = {}.TransitionGroup;
    /** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: "task",
        tag: "div",
        ...{ class: "space-y-2" },
    }));
    const __VLS_2 = __VLS_1({
        name: "task",
        tag: "div",
        ...{ class: "space-y-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
        const __VLS_4 = {}.TaskItem;
        /** @type {[typeof __VLS_components.TaskItem, ]} */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            ...{ 'onToggleTask': {} },
            ...{ 'onDeleteTask': {} },
            key: (task.id),
            task: (task),
        }));
        const __VLS_6 = __VLS_5({
            ...{ 'onToggleTask': {} },
            ...{ 'onDeleteTask': {} },
            key: (task.id),
            task: (task),
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        let __VLS_8;
        let __VLS_9;
        let __VLS_10;
        const __VLS_11 = {
            onToggleTask: (__VLS_ctx.toggleTask)
        };
        const __VLS_12 = {
            onDeleteTask: (__VLS_ctx.deleteTask)
        };
        var __VLS_7;
    }
    var __VLS_3;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-gray-500 text-center" },
    });
}
if (__VLS_ctx.tasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.clearAll) },
        ...{ class: "mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" },
    });
}
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cetner']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:bg-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-red-600']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=App.vue.js.map