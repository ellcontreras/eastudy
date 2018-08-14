<template>
    <vs-card vs-color="secondary">
        <vs-card-media :vs-media="img"></vs-card-media>        
        <vs-card-body>
            <span>
                Demuestra cuanto sabes de {{ name }}
            </span>
        </vs-card-body>
    </vs-card>
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
        height: 10px !important;
        min-height: 10px !important;
        max-height: 10px !important;
    }
</style>

