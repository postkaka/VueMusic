<template>
    <div class="song-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SongList",
        props:{
            infrom: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>