import React from 'react';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: this.props.perPage,
        }
    }

    componentDidMount(){
        this.setState({
            perPage: this.props.perPage
        })
    }

    handleClick = (e) => {
        this.setState({
            currentPage: e.target.id
        })
    }

    generatePagination = (renderPaginationLink) => {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {renderPaginationLink.map(i => {
                        return <li className="page-item" key={i}> <a className="page-link" href="#" id={i} onClick={this.handleClick}>{i}</a> </li>
                        }) 
                    }
                </ul>
            </nav>
        )
    }

    
    render(){
        const {currentPage, perPage} = this.state;
        const lastIndex = perPage * currentPage;
        const firstIndex = lastIndex - perPage;
        const currentPageitem = this.props.posts.slice(firstIndex, lastIndex);

        const renderPaginationLink = () => {
            let pageArr = []
            if(this.props.posts.length > 0) {
                for(let i=1; i<= Math.ceil(this.props.posts.length/perPage); i++){
                    pageArr.push(i);
                }
            }            
            return pageArr;
        }

        return(
            <div>
                {this.generatePagination(renderPaginationLink())}
                {currentPageitem.map(item => {
                    return React.cloneElement(this.props.children, {key: item.id, item: item})
                })
                }
            </div>
        )
    }
}