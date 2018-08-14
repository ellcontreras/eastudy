<template>
    <vs-card>
        <vs-card-body>
            <h2>{{ title }}</h2>
            <small>{{ date.seconds | formatDate }}</small>
            <p>{{ content }}</p>        
        </vs-card-body>
    </vs-card>
</template>

<script>
export default {
    name: 'Activity',
    props: {
        title: String,
        content: String,
        date: String
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
