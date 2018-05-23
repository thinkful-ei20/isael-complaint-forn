import React from 'react';

export default class Input extends React.Component{
    
    

    render() {
        let error;
        
        if(this.props.meta.touched && this.props.meta.error){
            error = <div>{this.props.meta.error}</div>
        }
        const Element =  this.props.element || 'input';
        // console.log(this.props.label)

        return (
            <div >
                <label htmlFor={this.props.name}>
                    {this.props.label}
                    {error}
                </label>
                <Element
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                >
                    {this.props.children}
                </Element>
            </div>
        );
    }
}

