import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import './TableManageUser.scss'
import * as actions from '../../store/actions'
import MarkdownIt from 'markdown-it';
import Lightbox from 'react-image-lightbox';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class TableManageUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            isOpen: false,
            previewImageURL: '',
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleEidtUser = (user) => {
    }
    openPreviewImage = () => {
        if (!this.state.previewImageURL) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        let list = this.state.list;
        return (
            <>
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {list && list.length > 0 &&
                            list.map((item, index) => {
                                return (
                                    <tr key="index">
                                        <td>
                                            {this.state.isOpen === true &&
                                                <Lightbox
                                                    mainSrc={this.state.previewImageURL}
                                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                                />
                                            }
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEidtUser(item)}
                                                className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                                onClick={() => this.handleDeleteUser(item)}
                                                className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
