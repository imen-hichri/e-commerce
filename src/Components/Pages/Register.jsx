import React, {Component} from 'react'


export default class Login extends Component {

    state = {
           firstName : '',
           lastName : '',
           username : '',
           pass : '',
           confirm : '',
    }
    handleChange = (evt) => {
        const fields = Object.assign({}, this.state);
           fields[evt.target.name] = evt.target.value;
           this.setState({...fields})
    }

    render() {
           return <div className='flex justify-center'>
            <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]'>
                <text className='text-2xl'>Register</text>
                <div className='flex mt-3'>
                <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300' placeholder='firstName' value={this.state.firstName} onChange={this.handleChange} name='firstName' />
                <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300 ml-3' placeholder='lastName' value={this.state.lastName} onChange={this.handleChange} name='lastName' />
                </div>
                <div className='flex mt-3'>
                    <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300' placeholder='UserName' value={this.state.username} onChange={this.handleChange} name='username' />
                </div>
                
                <div className='flex mt-3'>
                    <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300' placeholder='password' value={this.state.pass} onChange={this.handleChange} name='pass' required />
                    <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300 ml-3' placeholder='confirm' value={this.state.confirm} onChange={this.handleChange} name='confirm' />
                </div>
                <input type='button' value='Register' className='btn mt-7'/>
            </div>
           </div>
    }
}