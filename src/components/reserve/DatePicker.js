// import React, {useState} from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"
// import { ko } from "date-fns/esm/locale";
// import classes from './ReserveForm.module.css';
//
// function ReserveDatePicker() {
//
//     const [startDate, setStartDate] = useState();
//
//     return (
//         <DatePicker
//             className={classes.input}
//             locale={ko}
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={30}
//             minDate={new Date()}
//             timeCaption="time"
//             dateFormat="Pp"
//         />
//     );
// }
//
// export default ReserveDatePicker;