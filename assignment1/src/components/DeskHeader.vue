<template>
    <header>
        <nav class="navbar navbar-dark bg-dark box-shadow">
            <div class="navbar-brand">
                <h3>{{title}}</h3>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'desk-header',
    props: {
        title: {
            type: String,
            default: 'Deskbookers'
        }
    }
}
</script>

<style>
header {
    margin-bottom: 15px
}
</style>