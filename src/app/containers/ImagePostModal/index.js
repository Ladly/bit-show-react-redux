import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { postImageData } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class ImagePostModal extends Component {
    constructor() {
        super()
        this.state={
            value: "",
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    postData = () => {
        this.props.postImgData(this.state.value)
            .then(()=> {
                console.log("functionnnnnnnnnnn",this.props)
                if(this.props.postDataLoading) {
                    return <Loading /> 
                } else if (this.props.postDataSuccess) {
                    this.clearAndHide()
                } else {
                    return <Error />
                }
            })
    }

    hideModal = () => {
        return this.props.display ? 'my-modal' : 'my-modal hidden'
    }

    clearAndHide = () => {        
        this.setState({value: ''}, () => this.props.hideModal())
    }

    render() {
        return (
            <div className={this.hideModal()}>
                <input type="url" className="form-control" placeholder="Add image url" onChange={this.handleChange} value={this.state.value}/>
                <hr />
                <button onClick={this.clearAndHide} className="btn btn-primary cancel">Cancel</button>
                <button onClick={this.postData} className="btn btn-primary float-right add">Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postDataLoading: state.imagePostModalReducer.postImageLoading,
        postDataSuccess: state.imagePostModalReducer.postImageSuccess,
        postDataError: state.imagePostModalReducer.postImageError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postImgData: data => dispatch(postImageData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePostModal)