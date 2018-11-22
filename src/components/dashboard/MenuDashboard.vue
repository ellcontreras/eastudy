<template>
    <aside class="menu is-hidden-mobile">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li><a class="is-active">Dashboard</a></li>
        </ul>
        <p class="menu-label">
            Administration
        </p>
        <ul class="menu-list">
            <li><a>Configuración de Equipo</a></li>
            <li>
                <a>Administrar equipo</a>
                <ul>
                    <li><a>Miembros</a></li>
                    <li><a>Agregar un miembro</a></li>
                </ul>
            </li>
            <li><a>Auntenticación</a></li>
        </ul>
        <p class="menu-label">
            Transacciones
        </p>
        <ul class="menu-list">
            <li><a>Pagos</a></li>
            <li><a>Transferencias</a></li>
            <li><a>Balance</a></li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'MenuDashboard'
}
</script>
