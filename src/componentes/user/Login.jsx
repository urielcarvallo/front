import React from 'react';
import {connect} from 'react-redux'
import Footer from '../footer/footer'
class Test extends React.Component{
    singGoogle=()=>{
        window.location.href="http://localhost:8080/api/auth/google"
    }
    render(){
        return(
            <div>
                <h1>Hola mundo</h1>
                <Footer/>
                <div>
                        <button onClick={this.singGoogle}>
                        GOOGLE
                        </button>
                    </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
}

const mapDisparchToProps = dispatch=>{
    return {
        // getAccount: () => dispatch(getAccount())
    }
        
    }

export default connect(mapStateToProps,mapDisparchToProps)(Test);