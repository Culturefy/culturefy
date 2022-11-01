import React, { useState, useCallback } from 'react'
import { SelectDatepicker } from 'react-select-datepicker';//Date Picker
import Datas from "../assets/data.svg"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; //Calendar Icon
import { Margin } from '@mui/icons-material';
const DateFilter = () => {
    const [abc, setabc] = useState() // Date Picker  

    const onDateChange = useCallback((date) => {
        let abc = date;
        if (!abc) {
        } else {
            const abc = date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }) // "Jul 2021 Friday"
            setabc(abc)
        }
    }, []);
    const [endDate, setEndDate] = useState() // Date Picker  
    const onEndDateChange = useCallback((date) => {
        let abc = date;
        if (!abc) {
        } else {
            const abc = date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }) // "Jul 2021 Friday"
            setEndDate(abc)
        }
    }, []);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div className='date_comp'>
                <h4>Filter by</h4>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <div className='date_input_fields'>
                            <input
                                type="text"
                                placeholder='Select Start Date'
                                className='date_input'
                                value={abc}
                                name="abc"
                            />
                            <span className='dasshed__'> - </span>
                            <input
                                type="text"
                                className='date_input'
                                placeholder='    Select End Date '
                                value={endDate}
                            />
                            <CalendarTodayIcon className='cal_icon' />
                        </div>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        className='date_filter_main_menu'
                    >
                        <MenuItem >
                            <div className='datpick'>
                                <h5 className='start_end_date'>
                                    Start Date
                                </h5>
                                <SelectDatepicker
                                    // selectedDate={value}
                                    onDateChange={onDateChange}
                                />
                                <h5 className='start_end_date'>
                                    End Date
                                </h5>
                                <SelectDatepicker
                                    // selectedDate={endDate}
                                    onDateChange={onEndDateChange}
                                />
                            </div>

                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
 
    )
}

export default DateFilter
