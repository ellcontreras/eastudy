<template>
    <router-link :to="'/category/'+name">
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">
                    {{ name }}
                </div>
            </div>
            <div class="card-content">
                {{ name }}
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

