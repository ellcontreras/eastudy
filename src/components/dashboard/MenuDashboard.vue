<template>
    <aside class="menu is-hidden-mobile">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
        <p class="menu-label">
            Preguntas
        </p>
        <ul class="menu-list">
            <li><router-link to="/dashboard/view-questions">Ver preguntas</router-link></li>
            <li><router-link to="/dashboard/verify-questions">Verificar preguntas</router-link></li>
        </ul>
        <p class="menu-label">
            Quizes
        </p>
        <ul class="menu-list">
            <li><a>Ver quizes</a></li>
            <li><a>Crear quizes</a></li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'MenuDashboard'
}
</script>
