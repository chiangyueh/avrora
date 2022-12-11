import React from 'react';
import classnNames from 'classnames'

export enum ButtonSize{
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps{
    ClassName?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps =Partial< NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) =>{
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...resProps
    } = props;
	//btn, btn-lg, btn-primary
    const classes = classnNames('btn', className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link) && disabled
    });
    if(btnType ==ButtonType.Link && href){
        return(
            <a
            	className={classes}
                href={href}
                {...resProps}
            >
                {children}
            </a>
        )
    }else{
        return(
            <button
            	className={classes}
                disabled={disabled}
                {...resProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled : false,
    btnType : ButtonType.Default
}

export default Button