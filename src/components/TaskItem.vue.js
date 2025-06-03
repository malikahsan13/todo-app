export default (await import('vue')).defineComponent({
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
            required: true
        }
    }
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.$emit('toggle-task', __VLS_ctx.task.id);
        } },
    type: "checkbox",
    checked: (__VLS_ctx.task.completed),
    ...{ class: "mr-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ({ 'line-through text-gray-500': __VLS_ctx.task.completed }) },
});
(__VLS_ctx.task.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('delete-task', __VLS_ctx.task.id);
        } },
    ...{ class: "text-read-500 hover:text-red-700" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['line-through']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-read-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-red-700']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=TaskItem.vue.js.map