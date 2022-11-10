import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
import './MyCalendar.css'
// import 'react-big-calendar/lib/sass/styles';
// import '../react-big-calendar/lib/sass/styles'
// import '../../node_modules/react-big-calendar/lib/sass/styles'
const localizer = globalizeLocalizer(globalize)

const MyCalendar = () => (
  <div className='calendar_clone'>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
export default MyCalendar;