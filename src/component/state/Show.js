
import React from "react";
import './democss.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooggle: {
                lable: 'Show',
                isShow: false
            }
        }
    }

    hienNoiDung = () => {
        if (this.state.tooggle.isShow == false) {
            this.setState({
                tooggle: {
                    lable: 'Hide',
                    isShow: true
                }
            })

        } else {
            this.setState({
                tooggle: {
                    lable: 'Show',
                    isShow: false
                }
            })
        }
    }


    render() {
        return (
            <>
                <h1>Content</h1>
                <button onClick={this.hienNoiDung} className="btn btn-primary">{this.state.tooggle.lable}</button>
                {
                    this.state.tooggle.isShow && (
                        <div className="hihi">
                            Nôi DUng
                        </div>
                    )
                }
            </>

        )
    }




}
export default Show