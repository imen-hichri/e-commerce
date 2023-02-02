import React, {Component} from 'react'


export default class Login extends Component {

    state = {
           username : 'imen',
           pass : '',
    }
    handleChange = (evt) => {
        const fields = Object.assign({}, this.state);
           fields[evt.target.name] = evt.target.value;
           this.setState({...fields})
    }

    render() {
           return <div className='flex justify-center'>
            <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]'>
                <text className='text-2xl'>Login</text>
                <div className='flex mt-3'>
                    <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300' placeholder='UserName' value={this.state.username} onChange={this.handleChange} name='username' />
                </div>
                
                <div className='flex mt-3'>
                    <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#ffa3af] focus:border-[#ffa3af] ease-linear duration-300' placeholder='password' value={this.state.pass} onChange={this.handleChange} name='pass' required />
                </div>
                <input type='button' value='login' className='btn mt-7'/>
            </div>
           </div>
    }
}