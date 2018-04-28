import * as React from "react"

export interface Props {
}

export interface State {
}

export default class CoustomSelect extends React.Component<Props, State>{

    openSelectForm(self:any) {
          console.log(self.target);

    }


    render() {
        return (
            <div onClick={this.openSelectForm.bind(this)} className="customSelect">GBP</div>
        )
    }
}