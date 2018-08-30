<template>
    <div class="card">
        <div class="card-content">
            <h2>{{ title }}</h2>
            <small>{{ date.seconds | formatDate }}</small>
            <p>{{ content }}</p>
            <img id="act" :src="img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Activity',
    props: {
        title: String,
        content: String,
        date: String,
        img: String
    },
    filters: {
        formatDate(date) {
            date = new Date(date * 1000)
            var day = date.getDate()
            var month = date.getMonth()
            var year = date.getFullYear()

            var hour = date.getHours()
            var minutes = date.getMinutes()

            if (hour > 12) { 
                var format = "PM"
            } else {
                var format = "AM"
            }

            if (minutes < 10) {
                minutes = '0' + minutes
            }

            return `${hour}:${minutes} ${format} - ${day}/${month}/${year}`
        }
    }
}
</script>

<style scoped>
    img#act {
        width: 30% !important;
        height: 20% !important;
    }
</style>

