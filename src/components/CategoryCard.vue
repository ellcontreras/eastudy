<template>
    <vs-card vs-color="secondary">
        <vs-card-header :vs-title="name" vs-background-color="danger" :vs-fill="true"/>
        <vs-card-body>
            {{ name }}
        </vs-card-body>
    </vs-card>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        name: String
    }
}
</script>

