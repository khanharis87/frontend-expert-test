<template>
    <div class="desk-card card mb-4 box-shadow">
        <img class="card-img-top img-fluid" :src="desk.image_urls[0]" :alt="desk.name" />
        <div class="card-body">
            <h4 class="card-title">{{desk.name}}</h4>
            <p class="card-subtitle">{{desk.location_name}}</p>
            <p class="card-text">{{desk.location_city}}</p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'desk-card',
        props:['desk'],

    }
</script>

<style>

</style>
