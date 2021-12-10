<template>
  <div class="card widget-calendar">
    <div class="card-header">
      <div class="h5 text-muted mb-1 widget-calendar-year">{{year}}</div>
      <div class="h3 mb-0 widget-calendar-day">{{today}}</div>
    </div>

    <div class="card-body">
      <full-calendar :options="calendarOptions" ref="fullCalendar"></full-calendar>
    </div>
  </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import format from 'date-fns/format'

  const today = new Date();
  export default {
    name: 'calendar-widget',
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarOptions: {
          plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',
          editable: true,
          headerToolbar: false,
          events: [
            {
              title: 'Call with Dave',
              start: '2021-02-18',
              end: '2021-02-18',
              className: 'bg-red'
            },

            {
              title: 'Lunch meeting',
              start: '2021-02-21',
              end: '2021-02-22',
              className: 'bg-orange'
            },

            {
              title: 'All day conference',
              start: '2021-02-29',
              end: '2021-02-29',
              className: 'bg-green'
            },

            {
              title: 'Meeting with Mary',
              start: '2021-02-01',
              end: '2021-02-01',
              className: 'bg-blue'
            },

            {
              title: 'Winter Hackaton',
              start: '2021-02-03',
              end: '2021-02-03',
              className: 'bg-red'
            },

            {
              title: 'Digital event',
              start: '2021-02-07',
              end: '2021-02-09',
              className: 'bg-warning'
            },
          ]
        },
        year: today.getFullYear(),
        today: format(today, 'MMMM, dd'),
      };
    }
  };
</script>
