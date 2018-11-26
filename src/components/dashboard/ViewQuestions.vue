<template>
    <div>
        <div class="columns">
            <div class="column is-3 ">
                <menu-dashboard></menu-dashboard>
            </div>
            <div class="column is-9">
                <div class="hero is-primary">
                    <div class="hero-body">
                        <h2 class="title is-2 has-text-centered">Lista de preguntas</h2>
                    </div>
                </div>

                <hr>

                <ul class="menu-list">
                    <li v-for="(q, k) of questions" :key="k"><a>{{ q }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MenuDashboard from './MenuDashboard.vue'

export default {
    name: 'ViewQuestions',
    components: { MenuDashboard},
    data() {
        return {
            questions: ['123123', '12341234', '12341234', '12341234']
        }
    }
}
</script>
