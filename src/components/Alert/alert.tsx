import React, {useState} from "react";
import classnNames from 'classnames'

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

export interface BaseAlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    closeable?: boolean;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        title,
        description,
        type,
        closeable
    } = props;


    const classes = classnNames('avrora-alert', {
        [`alt-${type}`]: type,
        'closeable': closeable
    });

    const [closeIcon, setCloseIcon] = useState(closeable);
    const [closeAlert,setCloseAlert] = useState(true);

    if (closeIcon) {
        return (
            <div className={classes}>
                <div className='alt-closeable'>
                    <span>{title}</span>
                    <span className='alt-closeBtn' onClick={()=>{
                        setCloseIcon(!closeIcon);
                        setCloseAlert(!closeAlert);
                    }}>關閉</span>
                </div>
                <p>{description}</p>
            </div>
        )
    } else if(closeAlert){
        // setTimeout(()=>{setCloseAlert(!closeAlert)},3000);
        return (
            <div className={classes}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        )
    } else {
        return(<></>)
    }
}

Alert.defaultProps = {
    closeable : false,
    type : AlertType.Default
}

export default Alert;