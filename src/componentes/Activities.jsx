import React from 'react'
import {connect} from 'react-redux'
import ActivitiesIDitinerary from '../redux/actions/actionactivity'

class Activities extends React.Component{

    constructor(props){
      super(props)
      this.state={
        Activity:[],
        idIti:""
      }
    }

    async componentDidMount(){
      // console.log("ID DEL ITINERARIO",this.props.id_itinerario)
      await this.props.ActivitiesIDitinerary(this.props.id_itinerario);
      // console.log("state 1",this.state)

      this.setState({
        Activity:this.props.Activity
      })
      // console.log("2",this.state)
      // console.log("PROPS",this.props)
      }
    
    render(){
      // console.log("ITINERARIO",this.props.id_itinerario)
      // console.log("Dentro del render",this.state)
    return (
      <div>
              <h1>Activities</h1>

              {this.state.Activity.map((i,key)=>{
                // console.log("ACTIVITY",i);
                return(               
                  <div key={key}>
                    {i.comment}
                    {i.details.map((e,key)=>{
                      return(
                        <div key={key}>
                          {e.title}
                          {e.activityPic}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
      Activity:state.Activity
    }
  }
  

const mapDispatchToProps=(dispatch)=>{ 
        return {
          ActivitiesIDitinerary: (idIti) => dispatch(ActivitiesIDitinerary(idIti))
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Activities);


