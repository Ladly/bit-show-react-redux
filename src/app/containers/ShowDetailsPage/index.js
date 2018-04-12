import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchShowDetailsAndCast } from './actions'

import { SingleShowCard } from './../../components/SingleShowCard'

class ShowDetailsPage extends Component {

    componentDidMount() {
        this.props.detailsAndCast(this.props.match.params.id)
    }

    displayDetails = () => {
        if(this.props.showDetailsLoading) {
            return <h1>Loading</h1>
        } else if(this.props.showDetailsSuccess) {
            return <SingleShowCard showDetails={this.props.showDetails}/>
        } else if (this.props.showDetailsError) {
            return <h1>Error</h1>
        }
    }

    render() {        
        return (
            <div className="container">
                {this.displayDetails()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const showDetails = state.showDetailsReducer
return {
    showDetailsLoading: showDetails.fetchedShowDetailsLoading,
    showDetailsSuccess: showDetails.fetchedShowDetailsSuccess,
    showDetailsError: showDetails.fetchedShowDetailsError,
    showDetails: showDetails.showDetailsAndCast
    }
}

const mapDispatchToProps = (dispatch) => {
return {
        detailsAndCast: (id) => dispatch(fetchShowDetailsAndCast(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)