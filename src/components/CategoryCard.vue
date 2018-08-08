<template>
    <vs-card vs-color="secondary" :id="'category'+name">
        <vs-card-header :vs-title="name" :vs-background-color="color" :vs-fill="true"/>
        <vs-card-body>
            {{ name }}
        </vs-card-body>
    </vs-card>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        name: String,
        color: String
    }
}
</script>

