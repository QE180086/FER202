import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class HandleForm extends React.Component {

    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    getData = (e) => {
       const data= {...this.state.form};
       data[e.target.name]=e.target.value;
       this.setState({
        form:data
       })
        console.log(this.state.form.email)
        console.log(this.state.form.password)


    }   

    handleSubmit = (e) => {

        e.preventDefault();
        const { email, password } = this.state.form;
        console.log(email, password)
    }


    render() {
        return (
            <div className='mb-3 py-5'>
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name='email' placeholder='Email...' onChange={this.getData} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name='password' placeholder='Mật khẩu...' onChange={this.getData} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default HandleForm
