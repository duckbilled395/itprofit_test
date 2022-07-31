import React, {FC} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type PropsType = {
    date: Date,
    setDate: (date: Date) => void
}

const Date: FC<PropsType> = ({date, setDate}) => {
    console.log('render date')
    return (
        <DatePicker className='Field' name='date' selected={date} onChange={(date: any) => setDate(date)}/>
    );
};

export const DateInput = React.memo(Date);
