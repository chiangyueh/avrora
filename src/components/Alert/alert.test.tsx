import { render, fireEvent } from '@testing-library/react';
import Alert, {AlertType, BaseAlertProps} from "./alert";

const defaultProps = {
    title: 'testDefaultProps',
}

const typeProps: BaseAlertProps = {
    title: 'testBaseProps',
    type:AlertType.Success,
}

const closeableProps : BaseAlertProps = {
    title: 'testCloseProps',
    closeable:true,
}

describe('Test Alert component', () => {
    it('should render the correct default Alert', () => {
        const wrapper = render(<Alert {...defaultProps}></Alert>);
        const element = wrapper.getByText('testDefaultProps').parentNode as HTMLDivElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('DIV');
        expect(element).toHaveClass('avrora-alert alt-default');
    })
    it('should render the correct base on different alert props', () => {
        const wrapper = render(<Alert {...typeProps}></Alert>);
        const element = wrapper.getByText('testBaseProps').parentNode as HTMLDivElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('DIV');
        expect(element).toHaveClass('avrora-alert alt-success');
    })
    it('should render the close button when closeable set to true', () => {
        const wrapper = render(<Alert {...closeableProps}></Alert>);
        const element = wrapper.getByText('關閉') as HTMLSpanElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('SPAN');
        expect(element).toHaveClass('alt-closeBtn');
        fireEvent.click(element);
        expect(element).not.toBeInTheDocument();
    })
})