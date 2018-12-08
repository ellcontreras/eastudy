<template>
    <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
            <!-- <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">439k</p>
                    <p class="subtitle">Usuarios</p>
                </article>
            </div> -->
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ totalQuestions }}</p>
                    <p class="subtitle">Preguntas</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">3.4k</p>
                    <p class="subtitle">Quizes</p>
                </article>
            </div>
            <!-- <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">19</p>
                    <p class="subtitle">Exceptions</p>
                </article>
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'MetricsDashboard',
    data() {
        return {
            totalQuestions: 0
        }
    },
    beforeMount() {
        this.totalQuestions = this.$store.state.adminQuestions.length
    }
}
</script>
