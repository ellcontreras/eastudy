<template>
    <div class="container">
        <div class="columns">
            <div class="column is-3 ">
                <menu-dashboard></menu-dashboard>
            </div>
            <div class="column is-9">
                <section class="hero is-primary welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hola, Admin.
                            </h1>
                            <h2 class="subtitle">
                                Espero que estés teniendo un buen día!
                            </h2>
                        </div>
                    </div>
                </section>
                <metrics-dashboard></metrics-dashboard>
                <div class="columns">
                    <div class="column is-6">
                        <events-dashboard></events-dashboard>
                    </div>
                    <div class="column is-6">
                        <search-dashboard></search-dashboard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MetricsDashboard from '@/components/dashboard/MetricsDashboard.vue'
import MenuDashboard from '@/components/dashboard/MenuDashboard.vue'
import EventsDashboard from '@/components/dashboard/EventsDashboard.vue'
import SearchDashboard from '@/components/dashboard/SearchDashboard.vue'

export default {
    name: 'Dashboard',
    components: { EventsDashboard, MenuDashboard, MetricsDashboard, SearchDashboard },
    data() {
        return {
            totalQuestions: 1122,
            totalQuiz: 129,
            totalUsers: 129
        }
    }
}
</script>
