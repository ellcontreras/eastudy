<template>
    <div class="card events-card">
        <header class="card-header">
            <p class="card-header-title">
                Eventos
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </a>
        </header>
        <div class="card-table">
            <div class="content">
                <table class="table is-fullwidth is-striped">
                    <tbody>
                        <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Ver todos</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'EventsDashboard'
}
</script>
