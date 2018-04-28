import * as React from 'react';
interface Props {
    name: string;
}
export default class Hello extends React.Component<Props, any> {
    render() {
        const { name } = this.props;
        return (
            <div>{name}</div>
        );
    }
}

