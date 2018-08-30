<template>
    <div class="card">
        <img :src="img" alt="">  
        <div class="card-content">
            <span>
                Demuestra cuanto sabes de {{ name }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizCard',
    props: {
        name: String,
        img: String
    }
}
</script>

<style scoped>
    img {
        height: 100px !important;
        width: 100%;
        min-height: 250px !important;
        max-height: 350px !important;
    }
</style>

