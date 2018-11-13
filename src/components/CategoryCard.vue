<template>
    <router-link :to="'/category/'+name">
        <div class="hero" :class="`is-${color}`">
            <div class="hero-body has-text-centered">
                <h3 class="subtitle is-3">{{ name }}</h3>
            </div>
        </div>
    </router-link>
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
